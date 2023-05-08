import { Component, OnInit,ViewChild } from '@angular/core';
import { SignupComponent } from '../modals/signup/signup.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // @ViewChild('modal', {static: false}) modal: SignupComponent;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  openModal() {
  //  this.modal.open();
  }
  openAuth(){
    this.router.navigate(['/auth']);
  }
}
