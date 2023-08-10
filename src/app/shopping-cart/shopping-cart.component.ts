import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {ShoppingCartService} from './shopping-cart.service'
import CloseIcon from '@mui/icons-material/Close';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})

export class ShoppingCartComponent {
  showDetailsContainer: boolean = false;
  showDetailsContainer1: boolean = false;
  showDetailsContainer2: boolean = false;

  showContent:string="show Details ᐯ";
  showContent1:string="show Details ᐯ";
  showContent2:string="show Details ᐯ";

  shoppingData:any;
  closeIcon:any=CloseIcon


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

  constructor(private breakpointObserver: BreakpointObserver,private shoppingCartService:ShoppingCartService) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.updateTileCols();
console.log(this.closeIcon)
      shoppingCartService.getShoppingData().subscribe((data)=>{
       this.shoppingData=data;
      })
    });
  }

  updateTileCols() {
    this.tiles[1].cols = this.isSmallScreen ? 4 : 3;
    this.tiles[0].cols = this.isSmallScreen ? 4 : 1;
  }
}
