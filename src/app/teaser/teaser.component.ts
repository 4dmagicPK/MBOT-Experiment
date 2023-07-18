import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.less']
})
export class TeaserComponent implements OnInit {

  closeContainer() {
    const container = document.getElementById("container");
    if (container) {
      container.style.display = "none";
    }
  }

  userType!: string;
  teaser: any;
  dashboardView: any;
  errorMessage!: string;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
     // Simulating API call to fetch the teaser data
     this.http.get('assets/teaser.json').subscribe(
      (response: any) => {
        this.userType = response.userType;
        this.teaser = response.data.teaser;
        this.dashboardView = response.data.dashboardView;
        this.errorMessage = this.teaser.errorMessage;
      },
      (error: any) => {
        this.errorMessage = 'Error retrieving teaser data.';
      }
    );
  }
  
}
