import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-teacher-practice',
  templateUrl: './teacher-practice.component.html',
  styleUrls: ['./teacher-practice.component.css']
})
export class TeacherPracticeComponent implements OnInit {

  constructor() { }

  courses = [];

  ngOnInit(): void {

    var data = {
      lesson_module_type:1,
    };

    axios.post('http://localhost:3333/api/teacher-courses', data).then((response) => {

      this.courses = response.data;
    });
  }

}
