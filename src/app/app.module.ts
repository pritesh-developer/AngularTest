import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { GetCustomerService } from './get-customer.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { RegisterComponent } from './test/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
	
    CustomerServiceComponent,
	
    CustomerDetailsComponent,
	RegisterComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
    AppRoutingModule,
	RouterModule
  ],
  providers: [GetCustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
