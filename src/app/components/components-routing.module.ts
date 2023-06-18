

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './About/About.component';
import {AnnouncementsComponent} from './announcements/announcements.component';
import {TutorsComponent} from './tutors/tutors.component';
import {TutorlistComponent} from './tutors-list/tutors-list.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';
import {DiscusionForumComponent} from './discusion-forum/discusion-forum.component';

import {InboxComponent} from './inbox/inbox.component'


const routes: Routes = [
        { path: '', component: HomepageComponent },
        { path: 'about', component: AboutComponent },
        { path: 'announcement' , component:AnnouncementsComponent},
        { path: 'tutor' , component:TutorsComponent},
        { path:'tutors', component:TutorlistComponent},
       // { path: '**' , component:PageNotfoundComponent},
        { path:'forum', component:DiscusionForumComponent},
        { path: 'inbox' , component:InboxComponent}

];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule {

}
