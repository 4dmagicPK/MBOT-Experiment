import { Component, OnInit } from '@angular/core';
import {AdminNavbarServiceService} from './admin-navbar-service.service'
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
getDataOfAdminNavbar:any;
  constructor(private adminNavbarServiceService:AdminNavbarServiceService) { }

  ngOnInit(): void {
    this.adminNavbarServiceService.getAdminMenuItems().subscribe((data)=>{
      this.getDataOfAdminNavbar=data;
    })
  }

}
