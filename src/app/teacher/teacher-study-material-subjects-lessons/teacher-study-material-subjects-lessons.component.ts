import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-teacher-study-material-subjects-lessons',
  templateUrl: './teacher-study-material-subjects-lessons.component.html',
  styleUrls: ['./teacher-study-material-subjects-lessons.component.css']
})
export class TeacherStudyMaterialSubjectsLessonsComponent implements OnInit {


  constructor(private route: ActivatedRoute,private router: Router, private message: NzMessageService) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  lessons = [];
  lesson_modules = [{
    lesson_items:[]
  }];
  lesson_count = 0;

  newLessonModal = false;
  newLessonTypeModal = false;
  lesson_type= "5";
  
  subject_id = 0;
  course_id = 0;
  lesson_id = 0;
  board_id = 0;
  lesson_name = '';
  course_name = '';
  subject_name = '';
  board_name = '';

  lesson_module_name = '';
  edit_lesson_module_id = -1;
  edit_lesson_module_count = 0;

  resouce_link = '';
  resource_name = '';

  editResourceModal=false;

  edit_lesson_item = 0;
  JSON = JSON;
  hours = 0.00;
  estimated_lesson_item_time = 0

  ngOnInit(): void {
    this.filterMethod();
  }

  filterMethod() {
    this.route.queryParams
    .subscribe(params => {

      let lesson_id = params.lesson_id;

      let data = {};

      if(lesson_id) {
        data = {
          subject_id: params.subject_id,
          lesson_id: params.lesson_id,
        };
      } else {
        data = {
          subject_id: params.subject_id
        };
      }

      this.course_id = params.course_id
      this.subject_id = params.subject_id

      axios.post('http://localhost:3333/api/teacher-course-lessons', data).then((response) => {
        const collect = require('collect.js');
        const lesson_modules = collect(response.data.lesson_modules).where('lesson_module_type', 2).toArray();
        let count = 0;
        let hours = 0;

        for (let index = 0; index < lesson_modules.length; index++) {
          const element = lesson_modules[index];
          const lesson_items = element.lesson_items;
          for (let index = 0; index < lesson_items.length; index++) {
            count++
          }
        }

        this.lessons  = response.data.lessons
        this.lesson_modules  = lesson_modules;
        this.lesson_count = count;
        this.lesson_id = response.data.lesson_id;
        this.lesson_name = response.data.lesson_name;
        this.course_name = response.data.course_name;
        this.subject_name = response.data.subject_name;
        this.board_name = response.data.board_name;
        this.lesson_name = response.data.lesson_name;
        this.board_id = response.data.board_id;
        this.course_id = response.data.course_id;
        
      });
    }
    );
  }

  calcHours() {
    let hours = 0;

    for (let index = 0; index < this.lesson_modules.length; index++) {
      const element = this.lesson_modules[index];
      const lesson_items = element.lesson_items;
      for (let index = 0; index < lesson_items.length; index++) {
        if(lesson_items[index].lesson_item_type==0) {
          let lesson_item_content = lesson_items[index].lesson_item_content;
          const wpm = 225;
          const words = lesson_item_content.trim().split(/\s+/).length;
          const time = Math.ceil(words / wpm);
          hours += time/60;
        }
      }
    }

    console.log(hours);
  }

  addNewLessonModule() {

    let data = {
      subject_id: this.subject_id,
      course_id: this.course_id,
      lesson_id: this.lesson_id,
      board_id: this.board_id,
      lesson_module_name: this.lesson_module_name,
      lesson_module_type: 2,
    };

    axios.post('http://localhost:3333/api/teacher-course-lessons-new', data).then((response) => {
      this.filterMethod()
      this.newLessonModal = false;
    });
  }

  addNewLessonItem() {

    if(this.estimated_lesson_item_time===0) {
      this.message.error("Please enter estimated time!");
      return false;
    }

    let data = {
      subject_id: this.subject_id,
      course_id: this.course_id,
      lesson_id: this.lesson_id,
      board_id: this.board_id,
      lesson_module_name: this.lesson_module_name,
      lesson_module_id: this.edit_lesson_module_id,
      lesson_item_type: this.lesson_type,
      lesson_item_order: this.edit_lesson_module_count,
      lesson_item_time: this.estimated_lesson_item_time,
      lesson_item_content: JSON.stringify({resource_name:this.resource_name, resouce_link:this.resouce_link}),
    };

    axios.post('http://localhost:3333/api/teacher-course-lesson_item-new', data).then((response) => {
      this.filterMethod()
      this.newLessonTypeModal = false;
    });
  }

  updateLessonItem() {
    let data = {
      lesson_item_id: this.edit_lesson_item,
      lesson_item_content: JSON.stringify({resource_name:this.resource_name, resouce_link:this.resouce_link}),
    };

    axios.post('http://localhost:3333/api/teacher-course-lesson_single-save-article', data).then((response) => {
      this.message.success('Resouce updated successfully!');
      this.editResourceModal=false;
      this.filterMethod()
    }); 
  }

  deleteLessonItem() {
    let data = {
      lesson_item_id: this.edit_lesson_item,
    };

    axios.post('http://localhost:3333/api/teacher-course-lesson_single-delete', data).then((response) => {
      this.message.success('Resouce deleted successfully!');
      this.editResourceModal=false;
      this.filterMethod()
    }); 
  }

  handleChangeResource(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {


      this.resouce_link = info.file.response.name;

      this.message.success(`${info.file.name} file uploaded successfully`);

    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

}
