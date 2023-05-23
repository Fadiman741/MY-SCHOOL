import { Component, OnInit } from '@angular/core';
import { faLayerGroup,faAddressCard,faUsers} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
  breadCrumbItems: Array<{}> = [];
  faAddressCard=  faAddressCard
  faUsers=faUsers;
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'About', active: true }];
  }

}
