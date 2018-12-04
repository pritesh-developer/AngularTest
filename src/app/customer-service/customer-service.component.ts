import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { GetCustomerService } from '../get-customer.service';
import { Customers } from '../Customers';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {

  customers:Customers[];
  constructor(private _getCustomers: GetCustomerService) { }
  
  @Input() myValue;
  @Output() myOutputValue = new EventEmitter();
  

  ngOnInit() {
	  
	  console.log(this.myValue);
	  
	  this._getCustomers.getAllCustomers()
	                .subscribe((customerData)=>this.customers=customerData);
					
	  console.log();
					
	  this.myOutputValue.emit('trest');
  }

}
