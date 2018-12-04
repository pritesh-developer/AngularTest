import { Component } from '@angular/core';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { Customers } from './Customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyServiceApp';
  
  callingMethodParent(e)
  {
	 
	  console.log(e);
  }
}
