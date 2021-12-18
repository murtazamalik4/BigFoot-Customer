import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import axios from 'axios';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  name = '';
  username = '';
  email = '';
  password_confirmation = '';
  password = '';
  page = 1;
  remember_password=false;
  showForgerPassword = false;

  constructor(private message: NzMessageService, private router: Router) { }

  ngOnInit(): void {

    var token = localStorage.getItem("token"); 
    var role = localStorage.getItem("role"); 
    if(token) {

      if(role=="admin") {
        this.router.navigate(['/dashboard']);
      } else if(role=="employee") {
        this.router.navigate(['/employee-summary']);
      } else {
        this.router.navigate(['/my-account']);
      }
    }
  }

  createSuccessMessage(msg: string): void {
    this.message.create('success', msg);
  }

  createErrorMessage(msg: string): void {
    this.message.create('error', msg);
  }


  loginFn() {
    var url = 'https://www.waskarevents.in/api/login';

    var data = {
      "email": this.email,	
      "password": this.password,	
    };

    axios.post(url, data, {}).then(response => {
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ response.data.token;
      this.createSuccessMessage(`Logged In Successfully!`);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("id", response.data.user.id);
      localStorage.setItem("role", response.data.user.role);
      localStorage.setItem("status", response.data.user.status);
      localStorage.setItem("username", response.data.user.username);
      
      if(response.data.user.role=="admin") {
        this.router.navigate(['/dashboard']);
      } else if(response.data.user.role=="employee") {
        this.router.navigate(['/employee-summary']);
      } else {
        this.router.navigate(['/my-account']);
      }
      
      
    })
    .catch(error => {
      if(error.response) {
        if(error.response.data) {
          if(error.response.data.error) {
            this.createErrorMessage(error.response.data.error);
          } else {
            this.createErrorMessage("Something went wrong!");
          }
        } else {
          this.createErrorMessage("Something went wrong!");
        }
      } else {
        this.createErrorMessage("Something went wrong!");
      }
    });
  }

  forgetPass() {
    if(this.email==""){
      this.createSuccessMessage(`Please enter your email!`);
      return false;
    }

    var url = 'https://www.waskarevents.in/api/user/forget-password';

    var data = {
      "email": this.email,	
    };

    axios.post(url, data, {}).then(response => { 
      if(response.data=="No Account Found!") {
        this.createErrorMessage(`No Account Found!`);
      } else {
        this.createSuccessMessage(`Please check your email and follow instructions to reset your password!`);
      }
    });

  }

}
