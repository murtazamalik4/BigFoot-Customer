import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css']
})
export class TeacherCoursesComponent implements OnInit {

  constructor() { }

  courses = [];

  ngOnInit(): void {

    var data = {
      lesson_module_type:0,
    };

    axios.post('http://localhost:3333/api/teacher-courses', data).then((response) => {

      this.courses = response.data;
    });
  }

}
 