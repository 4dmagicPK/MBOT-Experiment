import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import CloseIcon from '@mui/icons-material/Close';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
interface ContactPerson {
  name: string;
  
}

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})

export class ContactDetailsComponent {
  brandname: string = '';
  deliveryName: string = '';
  deliveryHouse: string = '';
  deliveryPostCode: string = '';
  deliveryContact: string = '';
  deliveryEmail:string='';
  billingName: string = '';
  billingHouse: string = '';
  billingPostCode: string = '';
  billingContact: string = '';
  billingEmail:string='';
  firstName:string='';
  lastName:string='';
  firstContactPersonEmail:string='';
  firstContactPersonCountryName:string='';
  firstContactPersonMobile:Number=92;
  firstContactPersonTelefon:Number=0;
  firstName2:string='';
  lastName2:string='';
  firstContactPersonEmail2:string='';
  firstContactPersonCountryName2:string='';
  firstContactPersonMobile2:Number=92;
  firstContactPersonTelefon2:Number=0;


  submitted: boolean = false;
  errorMessages: any;
  changeDetectorRef: any;
  showSecondContactPerson:Boolean=false;
  showThirdContactPerson:Boolean=false;
  

  closeIcon:any=CloseIcon

  setError(field: string, errorMessage: string) {
    this.errorMessages = { ...this.errorMessages, [field]: errorMessage };
  }

  onCancelForm(){

  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      // Submit the form or perform other actions
    }
  }

  onAddContact() {
    if (!this.showSecondContactPerson) {
      this.showSecondContactPerson = true;
    } else if (!this.showThirdContactPerson) {
      this.showThirdContactPerson = true;
    }
  }

  onCloseContact(closeSecond: boolean) {
    if(this.showThirdContactPerson && this.showThirdContactPerson){
      if (closeSecond) {
        this.showThirdContactPerson = false;
      }
      else if(closeSecond===false){
      this.showThirdContactPerson=false;
      }
    }
    else{
      this.showSecondContactPerson = false;
    }
  }

  
  isFormValid(): boolean {
    let isValid = true;
  
    // Perform validation for required fields and email
    const requiredFields = [
      { field: 'brandname', label: 'brandname' },
      { field: 'deliveryName', label: 'deliveryName' },
      { field: 'deliveryHouse', label: 'deliveryHouse' },
      { field: 'deliveryPostCode', label: 'deliveryPostCode' },
      { field: 'deliveryContact', label: 'deliveryContact' },
      { field: 'deliveryEmail', label: 'deliveryEmail' },
      { field: 'billingName', label: 'billingName' },
      { field: 'billingHouse', label: 'billingHouse' },
      { field: 'billingPostCode', label: 'billingPostCode' },
      { field: 'billingContact', label: 'billingContact' },
      { field: 'billingEmail', label: 'billingEmail' },
      { field: 'firstName', label: 'firstName' },
      { field: 'lastName', label: 'lastName' },
      { field: 'firstContactPersonEmail', label: 'firstContactPersonEmail' },
      { field: 'firstContactPersonCountryName', label: 'firstContactPersonCountryName' },
      { field: 'firstContactPersonMobile', label: 'firstContactPersonMobile' },
      { field: 'firstContactPersonTelefon', label: 'firstContactPersonTelefon' },
      { field: 'firstName2', label: 'firstName2' },
      { field: 'lastName2', label: 'lastName2' },
      { field: 'firstContactPersonEmail2', label: 'firstContactPersonEmail2' },
      { field: 'firstContactPersonCountryName2', label: 'firstContactPersonCountryName2' },
      { field: 'firstContactPersonMobile2', label: 'firstContactPersonMobile2' },
      { field: 'firstContactPersonTelefon2', label: 'firstContactPersonTelefon2' },





    ];
    
   
    for (const requiredField of requiredFields) {
      if (!newFunction(requiredField)) {
        this.setError(requiredField.field, `${requiredField.label} is required`);
        isValid = false;
      }
    }
  

    return isValid; // Return true if all validations pass

    function newFunction(this: any, requiredField: { field: string; label: string; }) {
      return this[requiredField.field];
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 7, color: 'lightgreen'},
    
  ];




  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.updateTileCols();
console.log(this.closeIcon)
      // shoppingCartService.getShoppingData().subscribe((data)=>{
      //  this.shoppingData=data;
      // })
    });
  }

  updateTileCols() {
    this.tiles[1].cols = this.isSmallScreen ? 4 : 3;
    this.tiles[0].cols = this.isSmallScreen ? 4 : 1;
  }
}


