import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Customers } from './Customers';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetCustomerService {

 
  constructor(private _http:Http) {  }
  
  
  getAllCustomers():Observable<Customers[]>{
	  
	 return  this._http.get('https://reqres.in/api/users?page=2')
	 .map(res => res.json().data).do(console.log);
  }
}
