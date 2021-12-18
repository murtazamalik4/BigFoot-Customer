import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  constructor() { }

  name = '';
  email = '';
  phone_number = '';
  city = '';
  state = '';
  country = '';
  profile_pic = '';
  status = '';

  ngOnInit(): void {
 
    var data = {};

    axios.post('http://localhost:3333/api/teacher-profile', data).then((response) => {

      this.name = response.data.name;
      this.email = response.data.email;
      this.phone_number = response.data.phone_number;
      this.city = response.data.city;
      this.state = response.data.state;
      this.country = response.data.country;
      this.profile_pic = response.data.profile_pic;
      this.status = response.data.status;
    });
  }

  save() {

    var data = {
      name: this.name,
      email: this.email,
      phone_number: this.phone_number,
      city: this.city,
      state: this.state,
      country: this.country,
      profile_pic: this.profile_pic,
    };

    axios.post('http://localhost:3333/api/teacher-profile-save', data).then((response) => {
      console.log(response);
      
    });
  }

}
