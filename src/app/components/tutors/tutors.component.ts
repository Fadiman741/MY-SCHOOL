import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {



  breadCrumbItems: Array<{}> = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'Tutor', active: true }];

  }
  openTutors(){
    this.router.navigate(['/tutors']);
  }

}
