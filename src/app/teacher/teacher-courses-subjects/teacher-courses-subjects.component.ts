import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-courses-subjects',
  templateUrl: './teacher-courses-subjects.component.html',
  styleUrls: ['./teacher-courses-subjects.component.css']
})
export class TeacherCoursesSubjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  subjects = [];
  course_id:-1
  
  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {

        var data = {
          course_id: params.course_id,
          lesson_module_type:0,
        };
    
        axios.post('http://localhost:3333/api/teacher-subjects', data).then((response) => {
    
          this.subjects = response.data;
          this.course_id  = response.data.course_id;
        });
      }
    );
  }

}
