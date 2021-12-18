import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-teacher-study-material',
  templateUrl: './teacher-study-material.component.html',
  styleUrls: ['./teacher-study-material.component.css']
})
export class TeacherStudyMaterialComponent implements OnInit {

  constructor() { }

  courses = [];
  ngOnInit(): void {

    var data = {
      lesson_module_type:2,
    };

    axios.post('http://localhost:3333/api/teacher-courses', data).then((response) => {

      this.courses = response.data;
    });
  }

}
