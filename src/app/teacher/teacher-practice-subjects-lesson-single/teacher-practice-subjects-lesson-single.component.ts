import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-teacher-practice-subjects-lesson-single',
  templateUrl: './teacher-practice-subjects-lesson-single.component.html',
  styleUrls: ['./teacher-practice-subjects-lesson-single.component.css']
})
export class TeacherPracticeSubjectsLessonSingleComponent implements OnInit {


  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private location: Location, private route: ActivatedRoute, private message: NzMessageService) { }

  lesson_module = {
    lesson_module_name:'',
    lesson_items:[]
  };
  lesson_item_content = '';

  lesson_item = {
    id:-1,
    lesson_item_type: -1,
    lesson_item_content: '',
    prev_lesson_id:-1,
    next_lesson_id:-1,
  }

  course_name = '';
  course_id = -1;
  board_name = '';
  subject_name = '';
  lesson_name = '';
  lesson_id:-1;
  subject_id:-1

  audioObj = {audio:'',image:''};
  quizObj = {title:'', image:'placeholder', options:[{text:''},{text:''},{text:''},{text:''}], correct_option:-1, answer_explaination:''};
  audioQuizObj = {audio:'',image:'', title:'', options:[{text:''},{text:''},{text:''},{text:''}], correct_option:-1, answer_explaination:''};

  videoUploadModel = false;
  audioUploadModal = false;
  imageUploadModal = false;
  quizImageUploadModal = false;
  audioQuizImageUploadModal = false;
  audioQuizAudioUploadModal = false;
  quizExplaination = false;
  audioQuizExplaination = false;

  quiz_title = '';

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {

      let lesson_item_id = params.lesson_item_id;
      let lesson_module_id = params.lesson_module_id;
  
      let data = {
        lesson_module_id: lesson_module_id,
      };

      axios.post('http://localhost:3333/api/teacher-course-lesson_single-get-module', data).then((response) => {
        this.lesson_module  = response.data;
        this.course_name  = response.data.course_name;
        this.course_id  = response.data.course_id;
        this.board_name  = response.data.board_name;
        this.subject_name  = response.data.subject_name;
        this.lesson_name  = response.data.lesson_name;
        this.lesson_id  = response.data.lesson_id;
        this.subject_id  = response.data.subject_id;
      });

      this.getLesson(lesson_item_id);
    });
  }

  playAudio(){
    this.audioPlayerRef.nativeElement.play();
  }

  getLesson(lesson_item_id) {
    let data = {
      lesson_item_id: lesson_item_id,
    };

    axios.post('http://localhost:3333/api/teacher-course-lesson_single-get-lesson-item', data).then((response) => {
      this.lesson_item  = response.data

      if(response.data.lesson_item_type==2) {
        this.audioObj  = response.data.lesson_item_content ? JSON.parse(response.data.lesson_item_content) : {audio:'',image:''};
      } else if(response.data.lesson_item_type==3) {
        this.quizObj  = response.data.lesson_item_content ? JSON.parse(response.data.lesson_item_content) : {title:'', image:'placeholder', options:[{text:''},{text:''},{text:''},{text:''}], correct_option:-1, answer_explaination:''};
      } else if(response.data.lesson_item_type==4) {
        this.audioQuizObj  = response.data.lesson_item_content ? JSON.parse(response.data.lesson_item_content) : {audio:'',image:'', title:'', options:[{text:''},{text:''},{text:''},{text:''}], correct_option:-1, answer_explaination:''};
      } else {
        this.lesson_item_content  = response.data.lesson_item_content;
      }

      this.videoUploadModel = false;
      this.audioUploadModal = false;
      this.imageUploadModal = false;
    }); 
  }

  addOption() {
    this.quizObj.options.push({text:''});
  }

  addExplaination() {
    this.message.info("P.S - You would also need to save the entire quiz!");
    this.quizExplaination=false;
  }

  deleteOption(i) {
    this.quizObj.options.splice(i, 1);
  }

  saveArticleLesson() {
    let data = {
      lesson_item_id: this.lesson_item.id,
      lesson_item_content: this.lesson_item_content,
    };

    axios.post('http://localhost:3333/api/teacher-course-lesson_single-save-article', data).then((response) => {
      this.message.success('Saved successfully!');
    }); 
  }

  saveQuiz() {

    if(this.quizObj.title=="") {
      this.message.error("Please enter quiz title!");
      return false;
    }

    if(this.quizObj.options.length<2) {
      this.message.error("Quiz must have atleast 2 options!");
      return false;
    }

    if(this.quizObj.correct_option==-1) {
      this.message.error("Please select a correct answer!");
      return false;
    }

    for (let index = 0; index < this.quizObj.options.length; index++) {
      if(this.quizObj.options[index].text=="") {
        this.message.error("Please fill text in all the options or delete them!");
        return false;
      }
    }
    
    let lesson_item_content = {...this.quizObj};

    let aaab = JSON.stringify(lesson_item_content);
    
    let data = {
      lesson_item_id: this.lesson_item.id,
      lesson_item_content: aaab,
    };
    
    axios.post('http://localhost:3333/api/teacher-course-lesson_single-save-article', data).then((response) => {
      this.getLesson(this.lesson_item.id);
      this.message.success(`Quiz saved successfully`);
    }); 
  }

  saveAudioQuiz() {

    if(this.audioQuizObj.title=="") {
      this.message.error("Please enter quiz title!");
      return false;
    }

    if(this.audioQuizObj.options.length<2) {
      this.message.error("Quiz must have atleast 2 options!");
      return false;
    }

    if(this.audioQuizObj.correct_option==-1) {
      this.message.error("Please select a correct answer!");
      return false;
    }

    for (let index = 0; index < this.audioQuizObj.options.length; index++) {
      if(this.audioQuizObj.options[index].text=="") {
        this.message.error("Please fill text in all the options or delete them!");
        return false;
      }
    }
    
    let lesson_item_content = {...this.audioQuizObj};

    let aaab = JSON.stringify(lesson_item_content);
    
    let data = {
      lesson_item_id: this.lesson_item.id,
      lesson_item_content: aaab,
    };
    
    axios.post('http://localhost:3333/api/teacher-course-lesson_single-save-article', data).then((response) => {
      this.getLesson(this.lesson_item.id);
      this.message.success(`Quiz saved successfully`);
    }); 
  }

  
  addAudioQuizOption() {
    this.audioQuizObj.options.push({text:''});
    this.audioQuizExplaination=false;
  }

  addAudioQuizExplaination() {
    this.message.info("P.S - You would also need to save the entire quiz!");
    this.audioQuizExplaination=false;
  }

  deleteAudioQuizOption(i) {
    this.audioQuizObj.options.splice(i, 1);
  }

  deleteLesson() {
    let data = {
      lesson_item_id: this.lesson_item.id,
    };

    axios.post('http://localhost:3333/api/teacher-course-lesson_single-delete', data).then((response) => {
      this.message.success('Deleted successfully!');
      this.location.back();
    }); 
  }

  goBack() {
    this.location.back();
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(info.file.response.name);
      
      let data = {
        lesson_item_id: this.lesson_item.id,
        lesson_item_content: info.file.response.name,
      };
  
      this.message.info('Linking video to this lesson!');
      
      axios.post('http://localhost:3333/api/teacher-course-lesson_single-save-article', data).then((response) => {
        this.getLesson(this.lesson_item.id);
        this.message.success('Video linked successfully!');
      }); 

      this.message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleChangeAudio(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {

      let lesson_item_content = {...this.audioObj}

      lesson_item_content.audio = info.file.response.name;
      
      let data = {
        lesson_item_id: this.lesson_item.id,
        lesson_item_content: JSON.stringify(lesson_item_content),
      };
      
      axios.post('http://localhost:3333/api/teacher-course-lesson_single-save-article', data).then((response) => {
        this.getLesson(this.lesson_item.id);
        this.message.success(`${info.file.name} file uploaded successfully`);
      }); 
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleChangeImage(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {

      let lesson_item_content = {...this.audioObj};

      lesson_item_content.image = info.file.response.name;

      let aaab = JSON.stringify(lesson_item_content);
      
      let data = {
        lesson_item_id: this.lesson_item.id,
        lesson_item_content: aaab,
      };
      
      axios.post('http://localhost:3333/api/teacher-course-lesson_single-save-article', data).then((response) => {
        this.getLesson(this.lesson_item.id);
        this.message.success(`${info.file.name} file uploaded successfully`);
      }); 
      
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleChangeImageQuiz(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {

      this.quizObj.image = info.file.response.name;
      this.message.success(`${info.file.name} file uploaded successfully`);
      this.quizImageUploadModal = false;

    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleChangeImageAudioQuiz(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {

      this.audioQuizObj.image = info.file.response.name;
      this.message.success(`${info.file.name} file uploaded successfully`);
      this.audioQuizImageUploadModal = false;

    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleChangeAudioQuiz(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {

      this.audioQuizObj.audio = info.file.response.name;
      this.message.success(`${info.file.name} file uploaded successfully`);
      this.audioQuizAudioUploadModal = false;

    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  editorConfig = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],
        [{ 'header': 2 }],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'align': [] }],
        ['link', 'image', 'video']                        
    ]
  };

}
