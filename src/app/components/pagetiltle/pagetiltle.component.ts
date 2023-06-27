import { Component, OnInit ,Input} from '@angular/core';
import { faLayerGroup,faEnvelope,faBell} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


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


  faLayerGroup=faLayerGroup;
  faEnvelope=faEnvelope;
  faBell=faBell;


  constructor(private router:Router) { }

  ngOnInit() {
  }
  viewInbox(){
    this.router.navigate(['/inbox']);
  }


}
