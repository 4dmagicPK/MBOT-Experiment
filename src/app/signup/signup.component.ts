import { Component, OnInit } from '@angular/core';

interface ContactPerson {
  name: string;
  telefone: string;
  mobile: string;
  email: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  brandName: string = '';
  department: string = '';
  mobileNumber: string = '';
  telephoneNumber: string = '';
  deliveryStreet: string = '';
  deliveryHouseNr: string = '';
  deliveryPostcode: string = '';
  deliveryCity: string = '';
  deliveryCountry: string = '';
  billingStreet: string = '';
  billingHouseNr: string = '';
  billingPostcode: string = '';
  billingCity: string = '';
  billingCountry: string ='';
  billingDifferent: boolean = false;
  contactPersons: any[] = [{ name: '', telefone: '', mobile: '', email: '' }];
  submitted: boolean = false;
  errorMessages: any;
  changeDetectorRef: any;

  addContactPerson() {
    if (this.contactPersons.length < 5) {
      this.contactPersons.push({ name: '', telefone: '', mobile: '', email: '' });
    }
  }

  removeContactPerson(index: number) {
    this.contactPersons.splice(index, 1);
    this.changeDetectorRef.detectChanges(); // Trigger change detection
  }
  
  setError(field: string, errorMessage: string) {
    this.errorMessages = { ...this.errorMessages, [field]: errorMessage };
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      // Submit the form or perform other actions
    }
  }
  
  isFormValid(): boolean {
    let isValid = true;
  
    // Perform validation for required fields and email
    const requiredFields = [
      { field: 'firstName', label: 'First Name' },
      { field: 'lastName', label: 'Last Name' },
      { field: 'username', label: 'Username' },
      { field: 'email', label: 'Email' },
      { field: 'brandName', label: 'Brand Name' },
      { field: 'department', label: 'Department' },
      { field: 'telephoneNumber', label: 'Telephone Number' },
      { field: 'deliveryStreet', label: 'Delivery Street Address' },
      { field: 'deliveryHouseNr', label: 'Delivery House Nr' },
      { field: 'deliveryPostcode', label: 'Delivery Postcode' },
      { field: 'deliveryCity', label: 'Delivery City' },
      { field: 'deliveryCountry', label: 'Delivery Country' },
      { field: 'billingStreet', label: 'Billing Street Address' },
      { field: 'billingHouseNr', label: 'Billing House Nr' },
      { field: 'billingPostcode', label: 'Billing Postcode' },
      { field: 'billingCity', label: 'Billing City' },
      { field: 'billingCountry', label: 'Billing Country' },
      { field: 'contactPersons[0].name', label: 'Contact Person Name' }
    ];
   
    for (const requiredField of requiredFields) {
      if (!newFunction(requiredField)) {
        this.setError(requiredField.field, `${requiredField.label} is required`);
        isValid = false;
      }
    }
  
    if (this.email && !this.validateEmail(this.email)) {
      this.setError('email', 'Invalid Email');
      isValid = false;
    }
  
    if (!this.contactPersons[0]?.name) {
      this.errorMessages['contactPersons[0].name'] = 'Contact Person 1 name is required';
      isValid = false;
    }

    return isValid; // Return true if all validations pass


    function newFunction(this: any, requiredField: { field: string; label: string; }) {
      return this[requiredField.field];
    }
  }
  
    
  constructor() { }

  ngOnInit(): void {
  }

}


