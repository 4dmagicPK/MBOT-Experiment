import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.less']
})
export class NewsletterComponent implements OnInit {
  closeContainer() {
    const container = document.getElementById("container");
    if (container) {
      container.style.display = "none";
    }
  }

  userType!: string;
  newsletter: any;
  dashboardView: any;
  errorMessage!: string;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
     // Simulating API call to fetch the newsletter data
     this.http.get('assets/newsletter.json').subscribe(
      (response: any) => {
        this.userType = response.userType;
        this.newsletter = response.data.newsletter;
        this.dashboardView = response.data.dashboardView;
        this.errorMessage = this.newsletter.errorMessage;
      },
      (error: any) => {
        this.errorMessage = 'Error retrieving newsletter data.';
      }
    );
  }
  
}
