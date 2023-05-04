

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MathematicsTwelveComponent} from './grade-twelve/mathematics-twelve/mathematics-twelve.component'


const routes: Routes = [
        { path: 'grade12/accounting', component: MathematicsTwelveComponent },

];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class GradesRoutingModule {

}
