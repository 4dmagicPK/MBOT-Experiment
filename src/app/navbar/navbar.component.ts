import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { AuthenticationService } from '@app/_services';
import { User, Role } from '@app/_models';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  homeNavbarData: any;
  user?:User|null; 

  constructor(private navbarData: NavbarService,private authenticationService: AuthenticationService ) {
    navbarData.navbarDataMethod().subscribe((data) => {
      this.homeNavbarData = data;
    });
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
}
  
}
