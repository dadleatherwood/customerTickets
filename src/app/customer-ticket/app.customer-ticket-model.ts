import {NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder} from '@angular/forms'

  //create: We create the validation tree
  //connect:  We connect the validation to UI
  //check:  We check if the validation is valid
export class Customer {
    CustomerFirstName : string = "";
    CustomerLastName : string = "";
    CustomerEmail : string = "";
    TicketSubject : string = "";
    TicketPriority : string = "";
    TicketDescription : string = "";

    //create
    formCustomerGroup: FormGroup = null;
    constructor() {
      var builder = new FormBuilder();
      this.formCustomerGroup = builder.group({}); //Use the builder to create
      //control ---> validation
      //1 control ---> 1 validation
      this.formCustomerGroup.addControl("CustomerFirstNameControl", new FormControl('',Validators.required))
      this.formCustomerGroup.addControl("CustomerLastNameControl", new FormControl('',Validators.required))
      // this.formCustomerGroup.addControl("CustomerEmailControl", new FormControl('',Validators.email))
      this.formCustomerGroup.addControl("CustomerSubjectControl", new FormControl('',Validators.required))
      this.formCustomerGroup.addControl("CustomerDescriptionControl", new FormControl('',Validators.required))
      
      //two or more validations
      
      var validationcollection = [];
      validationcollection.push(Validators.required)
      validationcollection.push(Validators.email)

      this.formCustomerGroup.addControl("CustomerEmailControl", new FormControl('',Validators.compose(validationcollection)))
    }
  }

