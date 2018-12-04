import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


const routes:Routes = [{path:'',component:LoginComponent}];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
	RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent
  ]
})
export class TestModule { }
