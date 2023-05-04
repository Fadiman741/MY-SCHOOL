import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathematics-twelve',
  templateUrl: './mathematics-twelve.component.html',
  styleUrls: ['./mathematics-twelve.component.css']
})
export class MathematicsTwelveComponent implements OnInit {
  
  breadCrumbItems: Array<{}> = [];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' },{ label: 'Grade 12' }, { label: 'Accounting', active: true }];

  }

}
