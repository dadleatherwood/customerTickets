import { Component } from '@angular/core';
import { Customer } from '../customer-ticket/app.customer-ticket-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.customer-ticket-view.html',
  styleUrls: ['./app.component.less']
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
