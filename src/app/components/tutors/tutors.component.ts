import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faChalkboardUser,faBookOpenReader } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {

  breadCrumbItems: Array<{}> = [];

  faChalkboardUser=faChalkboardUser;
  faBookOpenReader=faBookOpenReader;


  constructor(private router:Router) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'Tutoring', active: true }];

  }
  openTutors(){
    this.router.navigate(['/tutors']);
  }

}
