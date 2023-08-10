import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { AuthenticationService } from '@app/_services';
import { User, Role } from '@app/_models';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  homeNavbarData: any;
  user?:User|null; 
  currentPath: string='';

  constructor(private navbarData: NavbarService,private authenticationService: AuthenticationService,private router: Router ) {
    navbarData.navbarDataMethod().subscribe((data) => {
      this.homeNavbarData = data;
    });
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  

ngOnInit() {
  this.currentPath = this.router.url;
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.currentPath = event.url;
    }
  });
}

  logout() {
    this.authenticationService.logout();
}
  
}
