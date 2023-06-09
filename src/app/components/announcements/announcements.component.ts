import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  breadCrumbItems: Array<{}> = [];
  isReadMore: true = true;
  announcements: any;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'Announcement', active: true }];
    this.getAnnouncements();
  }

  showText() {
    this.isReadMore != this.isReadMore;
  }

  getAnnouncements = () => {
    this.apiservice.getAllAnnouncements().subscribe(
      data => {
        this.announcements = data;
        console.log(this.announcements);
      },
      error => {
        console.log(error);
      }
    );
  }
}