import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor() { }
  subject_groups = [];

  ngOnInit(): void {
    
    var data = {};

    axios.post('http://localhost:3333/api/teacher-dashboard', data).then((response) => {
      const collect = require('collect.js');
      const grouped = collect(response.data).groupBy('course_name');
      const subss = JSON.parse(grouped.toJson());

      let subject_groups = [];
      Object.keys(subss).forEach((subs) => {
        subject_groups.push({course_name:subs, subjects: subss[subs]})
      });

      this.subject_groups = subject_groups;
    });
  }

}
 