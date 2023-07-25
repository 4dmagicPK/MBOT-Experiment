import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  homeNavbarData: any;


  constructor(private navbarData: NavbarService) {
    navbarData.navbarDataMethod().subscribe((data) => {
      this.homeNavbarData = data;
    });
  }

  ngOnInit(): void {}



  
}
