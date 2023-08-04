import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {ShoppingCartService} from './shopping-cart.service'
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
  showContent:string="show Details ᐯ";
  shoppingData:any;

  @ViewChild('cardElement', { read: ElementRef }) cardElementRef!: ElementRef;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 7, color: 'lightgreen'},
    
  ];

showDetails() {
  this.showDetailsContainer = !this.showDetailsContainer;
  this.showContent=this.showDetailsContainer?"show Details ᐱ":"show Details ᐯ"

  // if (this.showDetailsContainer) {
  //   const cardWidth = this.cardElementRef.nativeElement.getBoundingClientRect().width;
  //   const detailsContainer = document.querySelector('.details-container') as HTMLElement;
  //   detailsContainer.style.width = `50px`;
  // }
}


  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver,private shoppingCartService:ShoppingCartService) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.updateTileCols();

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
