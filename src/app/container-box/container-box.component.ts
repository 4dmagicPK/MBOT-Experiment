import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-container-box',
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.less']
})
export class ContainerBoxComponent implements OnInit {

   getData:any;
   cols = 3;

  constructor(private serviceService:ServiceService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
   this.serviceService.getServices().subscribe((data)=>{
    this.getData=data;
    this.updateColsBasedOnScreenSize();
   })
  }


  updateColsBasedOnScreenSize() {
    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
      .subscribe(result => {
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 3;
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = 2;
        } else {
          this.cols = 1;
        }
      });
  }

  // Function to get the number of columns for the grid list
  getGridCols(): number {
    return this.cols;
  }


}
