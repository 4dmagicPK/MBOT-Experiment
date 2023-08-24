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
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})

export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  replyNewPassword: string = '';
  submitted: boolean = false;
  errorMessages: any;
  changeDetectorRef: any;

  showDetailsContainer: boolean = false;
  showDetailsContainer1: boolean = false;
  showDetailsContainer2: boolean = false;

  showContent:string="show Details ᐯ";
  showContent1:string="show Details ᐯ";
  showContent2:string="show Details ᐯ";

  shoppingData:any;
  closeIcon:any=CloseIcon

  setError(field: string, errorMessage: string) {
    this.errorMessages = { ...this.errorMessages, [field]: errorMessage };
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
      { field: 'oldPassword', label: 'First Name' },
      { field: 'newPassword', label: 'Last Name' },
      { field: 'replyNewPassword', label: 'replyNewPassword' },
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

  

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 7, color: 'lightgreen'},
    
  ];

showDetails() {
  this.showDetailsContainer = !this.showDetailsContainer;
  this.showContent=this.showDetailsContainer?"show Details ᐱ":"show Details ᐯ"
}
showDetails1() {
  this.showDetailsContainer1 = !this.showDetailsContainer1;
  this.showContent1=this.showDetailsContainer1?"show Details ᐱ":"show Details ᐯ"
}
showDetails2() {
  this.showDetailsContainer2 = !this.showDetailsContainer2;
  this.showContent2=this.showDetailsContainer2?"show Details ᐱ":"show Details ᐯ"
}


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











