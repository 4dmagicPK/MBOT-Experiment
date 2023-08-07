import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.less']
})
export class CalculationComponent {
  defaultText:string="BOOK All RESERVATIONS BINDINGLY";
  alternativeText:string="ALLE RESERVIERUNGEN VERBINDLICH BUCHE";
  btnText:string=this.defaultText;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Six', cols: 2, rows: 1, color: '#DDBDF1'},

  ];

  onMouseOver(){
    this.btnText=this.btnText===this.defaultText?this.alternativeText:this.defaultText;
  }
  onMouseOut(){
    this.btnText=this.defaultText;
  }
}
