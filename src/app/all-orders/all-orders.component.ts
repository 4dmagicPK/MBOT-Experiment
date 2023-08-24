import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {AllOrdersService} from './all-orders.service'
import CloseIcon from '@mui/icons-material/Close';
import { Router,NavigationEnd } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, Validators} from '@angular/forms';
import {StepperOrientation} from '@angular/material/stepper';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.less'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  // standalone: true,
})
export class AllOrdersComponent {
  showDetailsContainer: boolean = false;
  showDetailsContainer0: boolean = false;
  showDetailsContainer1: boolean = false;
  showDetailsContainer2: boolean = false;

  showContent:string="show Details ᐯ";
  showContent0:string="show Details ᐯ";
  showContent1:string="show Details ᐯ";
  showContent2:string="show Details ᐯ";

  allOrdersData:any;
  closeIcon:any=CloseIcon
  currentPath: string='';
  buttonText:string='Order new product';

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 7, color: 'lightgreen'},
    
  ];

showDetails() {
  this.showDetailsContainer = !this.showDetailsContainer;
  this.showContent=this.showDetailsContainer?"show Details ᐱ":"show Details ᐯ"
}
showDetails0() {
  this.showDetailsContainer0 = !this.showDetailsContainer0;
  this.showContent0=this.showDetailsContainer0?"show Details ᐱ":"show Details ᐯ"
}
showDetails1() {
  this.showDetailsContainer1 = !this.showDetailsContainer1;
  this.showContent1=this.showDetailsContainer1?"show Details ᐱ":"show Details ᐯ"
}
showDetails2() {
  this.showDetailsContainer2 = !this.showDetailsContainer2;
  this.showContent2=this.showDetailsContainer2?"show Details ᐱ":"show Details ᐯ"
}
buttonTextOver(){
  this.buttonText=this.buttonText=='Order new product'?'Produkt neu bestellen':'Order new product'
}

firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});
secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
thirdFormGroup = this._formBuilder.group({
  thirdCtrl: ['', Validators.required],
});
fourthFormGroup = this._formBuilder.group({
  fourthCtrl: ['', Validators.required],
});
stepperOrientation: Observable<StepperOrientation>;


  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver,private allOrdersService:AllOrdersService,private router: Router,private _formBuilder: FormBuilder) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.updateTileCols();
console.log(this.closeIcon)
allOrdersService.getallOrdersData().subscribe((data)=>{
       this.allOrdersData=data;
      })
    });
  }

  ngOnInit() {
    this.currentPath = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
      }
    });
  }

  updateTileCols() {
    this.tiles[1].cols = this.isSmallScreen ? 4 : 3;
    this.tiles[0].cols = this.isSmallScreen ? 4 : 1;
  }


  

}
