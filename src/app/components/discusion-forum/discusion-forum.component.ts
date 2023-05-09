import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discusion-forum',
  templateUrl: './discusion-forum.component.html',
  styleUrls: ['./discusion-forum.component.css']
})
export class DiscusionForumComponent implements OnInit {

  breadCrumbItems: Array<{}> = [];
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page' },{ label: 'grade 10' },{ label: 'Mathematics' }];
  }

}
