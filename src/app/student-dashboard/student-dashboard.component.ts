import { Component, OnInit } from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }

  // percent = ;

  ngOnInit(): void {
    console.log("yess");

    // const socket = io("http://localhost:3333")

    // socket.on('channel-1', (data) => {
    //   console.log(data)
    // })

    // socket.emit('channel-2', { socket: 'channel-2' })
    
  }

}
