import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import axios from 'axios';
import {Router} from "@angular/router"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    name = '';
    username = '';
    email = '';
    password_confirmation = '';
    password = '';
    page = 1;
    remember_password=false;
    showForgerPassword = false;
    isLoggedIn = false;

    constructor(private message: NzMessageService, private router: Router) {

      axios.interceptors.response.use((response) => {
  
        return response;
      }, (error) => {
      
          if(error.response.status=="410") {
            this.createErrorMessage("You do not have enough permissions to perform this action!");
          }
          if(error.response.status=="401") {
            localStorage.removeItem("token");
            this.createErrorMessage("Unauthorized transaction! Please login again to continue!");
          }
      
        return Promise.reject(error);
      });
  
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
      
    }

    createSuccessMessage(msg: string): void {
        this.message.create('success', msg);
      }
    
    createErrorMessage(msg: string): void {
        this.message.create('error', msg);
    }

    ngOnInit () {

    }

}
