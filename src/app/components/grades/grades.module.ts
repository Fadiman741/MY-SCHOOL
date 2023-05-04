import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GradesRoutingModule} from'./grades-routing.module';

import {MathematicsTwelveComponent} from './grade-twelve/mathematics-twelve/mathematics-twelve.component';

@NgModule({
  imports: [
    CommonModule,
    GradesRoutingModule,
  

  ],
  declarations: [MathematicsTwelveComponent],
  exports:[MathematicsTwelveComponent]

})
export class GradesModule { }
