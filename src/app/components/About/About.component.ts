import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
  breadCrumbItems: Array<{}> = [];
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'About', active: true }];
  }

}
