import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-customheader',
  templateUrl: './customheader.component.html',
  styleUrls: ['./customheader.component.scss']
})
export class CustomheaderComponent implements OnInit {
  search: string = '';
  path: string = '';
  open_menu = false;
  is_logged_in = false;
  showlogo1 = 'true';
  showlogo2 = 'false';
  showlogo3 = 'false';
  
  cart_products = [];

  constructor(private message: NzMessageService, private route: ActivatedRoute, private router: Router) { }

  setClassesToOpenMenu() {
    let myClasses = {
      animate__animated: this.open_menu,
      animate__slideInRight: this.open_menu,
      animate__faster: this.open_menu,
      noDisplay: !this.open_menu
    };
    return myClasses;
  }

  setClassesToShowOverlay() {
    let myClasses = {
      noDisplay: !this.open_menu
    };
    return myClasses;
  }

  openMenu() {
    this.open_menu = true;
  }

  closeMenu() {
    this.open_menu = false;
  }

  ngOnInit(): void {
    this.path = window.location.pathname;
    var token = localStorage.getItem("token");

    if(token) {
      this.is_logged_in = true;
    }

    var cart = localStorage.getItem('cart');
    
    if(cart) {
      this.cart_products = JSON.parse(cart);
    }

    var Mousetrap = require('mousetrap');

    Mousetrap.bind('a d d t o c a r t', () => { 
        var cart = localStorage.getItem('cart');
        
        if(cart) {
          this.cart_products = JSON.parse(cart);
        }

    });
    

    const dynamicScripts = [
      'assets/js/custom.script.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
      }
    
  }

  removeProduct(i) {
    
    var cart = localStorage.getItem('cart');
        
    if(cart) {
      var cart_products = [...this.cart_products];
      cart_products.splice(i,1);
      this.cart_products = cart_products;

      localStorage.setItem("cart", JSON.stringify(cart_products));
    }

  }

  setLogoClasses() {
    let myClasses = {
      logo: this.showlogo1 == "true",
      logov2: this.showlogo2 == "true",
      logov3: this.showlogo3 == "true",
    };
    return myClasses;
  }

  setLogoBwClasses() {
    let myClasses = {
      logobw: this.showlogo1 == "true",
      logobwv2: this.showlogo2 == "true",
      logobwv3: this.showlogo3 == "true",
    };
    return myClasses;
  }

  createSuccessMessage(msg: string): void {
    this.message.create('success', msg);
  }

  createErrorMessage(msg: string): void {
    this.message.create('error', msg);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("status");
    localStorage.removeItem("username");
    this.createSuccessMessage(`Logged Out Successfully!`);
    this.router.navigate(['/']);
  }
}
