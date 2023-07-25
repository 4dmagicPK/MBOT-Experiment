import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-container-box',
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.less']
})
export class ContainerBoxComponent implements OnInit {
   getData:any;
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
   this.serviceService.getServices().subscribe((data)=>{
    this.getData=data;
   })
  }

}
