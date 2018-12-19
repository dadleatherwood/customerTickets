import { Component } from '@angular/core';
import { Customer } from './app.customer-ticket-model'

@Component({
  templateUrl: './app.customer-ticket-view.html',
  styleUrls: [ './app.customer-ticket-view.css']
})
export class CustomerTicketComponent {
  title = 'customerTickets';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  FormSubmitted : boolean;
  Add () {
    this.CustomerModels.push(this.CustomerModel);
    this.FormSubmitted = true;
  }
  clearModal () {
    this.FormSubmitted = false;
    this.CustomerModel = new Customer();
  }
  hasError (typeofvalidator:string, controlname:string) : boolean {
    return this.CustomerModel
      .formCustomerGroup
      .controls[controlname]
      .hasError(typeofvalidator);
  }
}
