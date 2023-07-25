import { Component, OnInit } from '@angular/core';
import {AdminNavbarServiceService} from './admin-navbar-service.service'
import { AuthenticationService } from '@app/_services';
import { User, Role } from '@app/_models';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
getDataOfAdminNavbar:any;
user?: User | null;
  constructor(private adminNavbarServiceService:AdminNavbarServiceService, private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {
    this.adminNavbarServiceService.getAdminMenuItems().subscribe((data)=>{
      this.getDataOfAdminNavbar=data;
    })
  }
  logout() {
    this.authenticationService.logout();
}

}
