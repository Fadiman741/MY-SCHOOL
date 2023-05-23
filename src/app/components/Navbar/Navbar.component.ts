import { Component, OnInit,ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  faUser=faUser;


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
