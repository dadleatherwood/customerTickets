import { Component } from '@angular/core';
import { Customer } from './app.customer-ticket-model'

@Component({
  templateUrl: './app.customer-ticket-view.html'
})
export class AppComponent {
  title = 'customerTickets';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  Add () {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
