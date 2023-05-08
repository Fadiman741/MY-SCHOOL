import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AuthTemplateComponent} from './auth-template/auth-template.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [SignupComponent,LoginComponent,AuthTemplateComponent]
})
export class AuthModule { }
