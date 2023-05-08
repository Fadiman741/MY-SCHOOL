import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  breadCrumbItems: Array<{}> = [];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'Annoucement', active: true }];
  }

}
