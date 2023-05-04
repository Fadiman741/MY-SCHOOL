import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  breadCrumbItems: Array<{}> = [];
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page' }];
  }

}
