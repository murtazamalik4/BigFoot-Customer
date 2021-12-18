import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import axios from 'axios';
import {Router} from "@angular/router"

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  options = '';
  value: '';
  inputValue:'';
  
        

  name = '';
  username = '';
  email = '';
  password_confirmation = '';
  password = '';
  page = 1;
  remember_password=false;

  constructor(private message: NzMessageService, private router: Router) { }

  ngOnInit(): void {

    

    var token = localStorage.getItem("token"); 
    if(token) {
      this.router.navigate(['/my-account']);
    }
  }

  createSuccessMessage(msg: string): void {
    this.message.create('success', msg);
  }

  createErrorMessage(msg: string): void {
    this.message.create('error', msg);
  }

  signupFn() {

    if(this.name==""){
      this.createSuccessMessage(`Please enter your name!`);
      return false;
    }

    if(this.email==""){
      this.createSuccessMessage(`Please enter your email!`);
      return false;
    }

    if(this.username==""){
      this.createErrorMessage(`Please enter your username!`);
      return false;
    }

    if(this.password==""){
      this.createErrorMessage(`Please enter your password!`);
      return false;
    }

    var url = 'https://www.waskarevents.in/api/register';

    var data = {
      "name": this.name,	
      "email": this.email,	
      "username": this.username,	
      "password": this.password,	
    };

    


    axios.post(url, data, {}).then(response => {

      if(response.data.success) {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ response.data.token;
        
        this.createSuccessMessage(`Account Created Successfully!`);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("id", response.data.user.id);
        localStorage.setItem("role", response.data.user.role);
        localStorage.setItem("status", response.data.user.status);
        localStorage.setItem("username", response.data.user.username);
        
        this.router.navigate(['/my-account']);

      } else {
        this.createErrorMessage(`Something went wrong!`);
      }
    })
    .catch((error) => { 

      if(error.response) {

      if(JSON.parse(error.response.data).email=="The email must be a valid email address.") {

        this.createErrorMessage(`Invalid Email Address!`);

      } else if(JSON.parse(error.response.data).email=="The email has already been taken.") {

        this.createErrorMessage(`Email Address Already Taken!`);

      } else if(JSON.parse(error.response.data).username) {

        this.createErrorMessage(`Username Already Taken!`);

      } else if(JSON.parse(error.response.data).password) {

        this.createErrorMessage(`Please use strong password!`);

      } 

      } 
    });

    
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }


}
