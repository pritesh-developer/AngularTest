import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileService } from './profile.service';

import { DiscoverComponent } from './discover/discover.component';
import { MeComponent } from './me/me.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
	
    SidebarComponent,

  HomeComponent,
  TweetsComponent,
  NotificationsComponent,
 
  DiscoverComponent,
  MeComponent,
  TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
	HttpClientModule,
    AppRoutingModule,
  RouterModule
  ],
  providers: [ ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
