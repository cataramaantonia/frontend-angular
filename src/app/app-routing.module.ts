import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
