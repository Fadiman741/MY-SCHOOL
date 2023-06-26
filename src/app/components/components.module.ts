import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppRoutingModule} from './components-routing.module';
import { GradesModule } from './grades/grades.module';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AuthModule} from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' ;

import {AnnouncementsComponent} from './announcements/announcements.component';
import {NavbarComponent} from './Navbar/Navbar.component';
import {TopNavComponent} from './TopNav/TopNav.component';
import {PagetiltleComponent} from './pagetiltle/pagetiltle.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './About/About.component';
import {TutorsComponent} from "./tutors/tutors.component";
import {TutorlistComponent} from './tutors-list/tutors-list.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';
import {DiscusionForumComponent} from './discusion-forum/discusion-forum.component';
import {InboxComponent} from './inbox/inbox.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    GradesModule,
    // MdbCheckboxModule,
    

    AuthModule,
    FontAwesomeModule
  ],
  declarations: [
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    AnnouncementsComponent,
    TopNavComponent,
    PagetiltleComponent,
    TutorsComponent,
    TutorlistComponent,
    PageNotfoundComponent,
    DiscusionForumComponent,
    InboxComponent
  ],
  exports:[NavbarComponent,HomepageComponent,AboutComponent,TopNavComponent,PagetiltleComponent,TutorsComponent,TutorlistComponent,PageNotfoundComponent,DiscusionForumComponent,InboxComponent]
})
export class ComponentsModule { }
