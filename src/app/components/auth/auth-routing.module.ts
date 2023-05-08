

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AuthTemplateComponent} from'./auth-template/auth-template.component';

const routes: Routes = [

        {path:'auth',component:AuthTemplateComponent,
        children: [
                {path:'auth',redirectTo:'signin'},
                { path: 'signin', component: LoginComponent  },
                { path: 'signup', component: SignupComponent }
            ]}

];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AuthRoutingModule {

}
