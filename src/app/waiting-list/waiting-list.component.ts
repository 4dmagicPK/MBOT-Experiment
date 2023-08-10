import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {WaitingListService} from './waiting-list.service'
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.less']
})

export class WaitingListComponent {
  showDetailsContainer: boolean = false;
  showDetailsContainer1: boolean = false;
  showDetailsContainer2: boolean = false;

  showContent:string="show Details ᐯ";
  showContent1:string="show Details ᐯ";
  showContent2:string="show Details ᐯ";

  waitingListData:any;


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

  constructor(private breakpointObserver: BreakpointObserver,private waitingListService:WaitingListService) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.updateTileCols();

      waitingListService.getWaitingListData().subscribe((data)=>{
       this.waitingListData=data;
      })
    });
  }

  updateTileCols() {
    this.tiles[1].cols = this.isSmallScreen ? 4 : 3;
    this.tiles[0].cols = this.isSmallScreen ? 4 : 1;
  }
}






