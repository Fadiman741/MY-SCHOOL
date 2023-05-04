import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors-list',
  templateUrl: './tutors-list.component.html',
  styleUrls: ['./tutors-list.component.css']
})
export class TutorlistComponent implements OnInit {
  breadCrumbItems: Array<{}> = [];
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'Tutor' },{ label: 'Tutors', active: true }];
  }
}
