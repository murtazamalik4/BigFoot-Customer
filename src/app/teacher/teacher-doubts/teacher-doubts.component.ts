import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-doubts',
  templateUrl: './teacher-doubts.component.html',
  styleUrls: ['./teacher-doubts.component.css']
})
export class TeacherDoubtsComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      key: '1',
      course: 'Grade 5',
      board: 'CBSE',
      subject: 'Maths',
      chapter: 'Decimals',
      lesson: 'Rounding Decimals'
    },

    {
      key: '1',
      course: 'Grade 7',
      board: 'CBSE',
      subject: 'Science',
      chapter: 'Fibre to Fabric',
      lesson: 'Wool'
    },

    {
      key: '1',
      course: 'Grade 7',
      board: 'M.P. Board',
      subject: 'Science',
      chapter: 'Heat',
      lesson: 'Transfer of Heat'
    },

  ];

  ngOnInit(): void {
  }

}
