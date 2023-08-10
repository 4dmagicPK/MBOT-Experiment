import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {SingleOrderService} from './single-order.service'

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.less']
})
export class SingleOrderComponent {
  singleOrderData:any;

  mediaType: 'image' | null = null;
  mediaUrl: string | null = null;
  mediaName: string | null = null;

  handleImageInput(event: any) {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith('image')) {
      this.mediaType = 'image';
      this.mediaUrl = URL.createObjectURL(file);
      this.mediaName = file.name;
    } else {
      this.resetMedia();
    }
  }

  private resetMedia() {
    this.mediaType = null;
    this.mediaUrl = null;
    this.mediaName = null;
  }



  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 7, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    
  ];

  mainTiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];



  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver,private singleOrderService:SingleOrderService) {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.updateTileCols();
singleOrderService.getSingleOrderData().subscribe((data)=>{
       this.singleOrderData=data;
      })
    });
  }

  updateTileCols() {
    this.tiles[1].cols = this.isSmallScreen ? 4 : 3;
    this.tiles[0].cols = this.isSmallScreen ? 4 : 1;
  }

  
}
