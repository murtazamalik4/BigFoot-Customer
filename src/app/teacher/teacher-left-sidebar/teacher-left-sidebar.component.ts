import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-left-sidebar',
  templateUrl: './teacher-left-sidebar.component.html',
  styleUrls: ['./teacher-left-sidebar.component.css']
})
export class TeacherLeftSidebarComponent implements OnInit {

  pathType = '';

  constructor() { }

  ngOnInit(): void {

    this.setPathType()
  }

  setPathType() {
    let path = window.location.pathname;

    if(path == "") {
      this.pathType = 'dashboard';
    } 

    if(path == "/") {
      this.pathType = 'dashboard';
    } 

    if(path == "/teacher/dashboard") {
      this.pathType = 'dashboard';
    } 

    if(path == "/teacher/courses") {
      this.pathType = 'courses';
    } 

    if(path == "/teacher/course-subjects") {
      this.pathType = 'courses';
    } 

    if(path == "/teacher/course-lessons") {
      this.pathType = 'courses';
    } 

    if(path == "/teacher/course-lesson") {
      this.pathType = 'courses';
    } 


    if(path == "/teacher/practice") {
      this.pathType = 'practice';
    } 

    if(path == "/teacher/practice-subjects") {
      this.pathType = 'practice';
    } 

    if(path == "/teacher/practice-lessons") {
      this.pathType = 'practice';
    } 

    if(path == "/teacher/practice-lesson") {
      this.pathType = 'practice';
    } 

    
    //

    if(path == "/teacher/study-materials") {
      this.pathType = 'material';
    } 

    if(path == "/teacher/study-material-subjects") {
      this.pathType = 'material';
    } 

    if(path == "/teacher/study-material-lessons") {
      this.pathType = 'material';
    } 

    //


    if(path == "/teacher/doubts") {
      this.pathType = 'doubts';
    } 

    
    if(path == "/teacher/parents") {
      this.pathType = 'parents';
    } 

    if(path == "/teacher/profile") {
      this.pathType = 'profile';
    } 
  }

}
