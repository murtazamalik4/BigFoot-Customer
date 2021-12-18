import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customfooter',
  templateUrl: './customfooter.component.html',
  styleUrls: ['./customfooter.component.scss']
})
export class CustomfooterComponent implements OnInit {
  path: string = '';

  constructor() {

   }

  ngOnInit(): void {
    this.path = window.location.pathname;
  }

}
