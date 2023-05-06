import { Component, OnInit,ViewChild } from '@angular/core';
import { SignupComponent } from '../modals/signup/signup.component';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // @ViewChild('modal', {static: false}) modal: SignupComponent;
  constructor() { }

  ngOnInit() {
  }
  openModal() {
  //  this.modal.open();
  }
}
