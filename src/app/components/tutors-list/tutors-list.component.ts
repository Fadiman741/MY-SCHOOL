import { Component, OnInit } from '@angular/core';
import { faEnvelope,faBell,faSquarePhone,faLocationDot,faBookOpen} from '@fortawesome/free-solid-svg-icons';
//import { faEnvelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tutors-list',
  templateUrl: './tutors-list.component.html',
  styleUrls: ['./tutors-list.component.css']
})
export class TutorlistComponent implements OnInit {
  breadCrumbItems: Array<{}> = [];

  faEnvelope=faEnvelope;
  faBell=faBell;
  faSquarePhone=faSquarePhone;
  faLocationDot=faLocationDot;
  faBookOpen=faBookOpen;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'Tutoring' },{ label: 'Tutors', active: true }];
  }
}
