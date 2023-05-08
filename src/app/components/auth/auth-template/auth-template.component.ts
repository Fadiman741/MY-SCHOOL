import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-template',
  templateUrl: './auth-template.component.html',
  styleUrls: ['./auth-template.component.css']
})
export class AuthTemplateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openLogin(){
    this.router.navigate(['./signin']);
  }
  openSignup(){
    this.router.navigate(['./signup']);
  }
}
