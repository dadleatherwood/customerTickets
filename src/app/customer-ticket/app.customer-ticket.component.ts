import { Component } from '@angular/core';
import { Customer } from './app.customer-ticket-model'

@Component({
  templateUrl: './app.customer-ticket-view.html'
})
export class CustomerTicketComponent {
  title = 'customerTickets';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  Add () {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
  hasError (typeofvalidator:string, controlname:string) : boolean {
    return this.CustomerModel
      .formCustomerGroup
      .controls[controlname]
      .hasError(typeofvalidator);
  }
}
