import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {CancellationOrderService} from './cancellation-order.service'
import CloseIcon from '@mui/icons-material/Close';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cancellation-order',
  templateUrl: './cancellation-order.component.html',
  styleUrls: ['./cancellation-order.component.less']
})
export class CancellationOrderComponent {
  showDetailsContainer: boolean = false;
  showDetailsContainer1: boolean = false;
  showDetailsContainer2: boolean = false;

  showContent:string="show Details ᐯ";
  showContent1:string="show Details ᐯ";
  showContent2:string="show Details ᐯ";

  cancellationOrderData:any;
  closeIcon:any=CloseIcon
  firstButtonText:string="Go to the Product"


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
firstButtonTextChange(){
  this.firstButtonText=this.firstButtonText=="Go to the Product"?"Zum Produkt":"Go to the Product";
}


  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver,private cancellationOrderService:CancellationOrderService) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.updateTileCols();
console.log(this.closeIcon)
cancellationOrderService.getCancellationOrderData().subscribe((data)=>{
       this.cancellationOrderData=data;
      })
    });
  }

  updateTileCols() {
    this.tiles[1].cols = this.isSmallScreen ? 4 : 3;
    this.tiles[0].cols = this.isSmallScreen ? 4 : 1;
  }
}
