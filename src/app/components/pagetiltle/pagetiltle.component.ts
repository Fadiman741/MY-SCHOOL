import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-pagetiltle',
  templateUrl: './pagetiltle.component.html',
  styleUrls: ['./pagetiltle.component.css']
})
export class PagetiltleComponent implements OnInit {

  @Input() breadcrumbItems: any;
  @Input() title: any ;
  @Input() preference: any;
  @Input() preferenceText: any;
  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

}
