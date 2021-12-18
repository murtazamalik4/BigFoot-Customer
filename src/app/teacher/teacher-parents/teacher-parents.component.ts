import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-parents',
  templateUrl: './teacher-parents.component.html',
  styleUrls: ['./teacher-parents.component.css']
})
export class TeacherParentsComponent implements OnInit {

  constructor() { }
  chatDrawer = false;

  listOfData = [
    {
      key: '1',
      name: 'Connie A. Small',
      city:'New York',
      contact: '718-676-8540',
      country: 'USA',
      Status:'Verified',
    },

    {
      key: '2',
      name: 'Abir Mahasin Asfour',
      city:'Kansas City',
      contact: '816-767-3610',
      country: 'USA',
      Status:'Unverified',
    },

    {
      key: '2',
      name: 'Jürgen Bayer',
      city:'Duisburg',
      contact: '0203 65 10 16',
      country: 'Germany',
      Status:'Verified',
    }

  ];

  ngOnInit(): void {
  }

}
