import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import {ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss']
})
export class PasswordResetPageComponent implements OnInit {


  name = '';
  username = '';
  email = '';
  password_confirmation = '';
  password = '';
  type = '';
  page = 2;
  remember_password=false;
  token = '';

  setClassesForLogin() {
    let myClasses = {
      animate__animated: this.page == 1,
      animate__flipInX: this.page == 1,
      noDisplay: this.page != 1
    };
    return myClasses;
  }

  setClassesForSignUp() {
    let myClasses = {
      animate__animated: this.page == 2,
      animate__flipInX: this.page == 2,
      noDisplay: this.page != 2
    };
    return myClasses;
  }

  setClassesForForgetPassword() {
    let myClasses = {
      animate__animated: this.page == 3,
      animate__flipInX: this.page == 3,
      noDisplay: this.page != 3
    };
    return myClasses;
  }

  constructor(private message: NzMessageService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }


  createSuccessMessage(msg: string): void {
    this.message.create('success', msg);
  }

  createErrorMessage(msg: string): void {
    this.message.create('error', msg);
  }

  resetPassword() {

    if(this.password==""){
      this.createErrorMessage(`Please enter your password!`);
      return false;
    }

    if(this.password!=this.password_confirmation){
      this.createErrorMessage(`Passwords don't match!`);
      return false;
    }

    var url = 'https://www.waskarevents.in/api/user/reset-password';

    var data = {
      "password": this.password,	
      "token": this.token,	
    };

    axios.post(url, data, {}).then(response => {

      if(response.data.success) {
        this.createSuccessMessage(`Password Changed Successfully!`);
        this.router.navigate(['/login']);
      } else {
        this.createErrorMessage(`Invalid link!`);
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
    })
    ;

  }



}
