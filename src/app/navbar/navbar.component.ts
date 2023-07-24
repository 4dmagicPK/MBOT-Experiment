import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  homeNavbarData: any;
  showSecondNavbar1Flag = false;
  showSecondNavbar2Flag = false;

  constructor(private navbarData: NavbarService) {
    navbarData.navbarDataMethod().subscribe((data) => {
      this.homeNavbarData = data;
    });
  }

  ngOnInit(): void {}

  showSecondNavbar1() {
    this.showSecondNavbar1Flag = true;
    
  }

  hideSecondNavbar1() {
    this.showSecondNavbar1Flag = false;
  }

  showSecondNavbar2() {
    this.showSecondNavbar2Flag = true;
  }

  hideSecondNavbar2() {
    this.showSecondNavbar2Flag = false;
  }
}
