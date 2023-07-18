import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.less']
})
export class SocialMediaComponent implements OnInit {

  closeContainer() {
    const container = document.getElementById("container");
    if (container) {
      container.style.display = "none";
    }
  }

  userType!: string;
  article: any;
  dashboardView: any;
  errorMessage!: string;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
     // Simulating API call to fetch the article data
     this.http.get('assets/article-data.json').subscribe(
      (response: any) => {
        this.userType = response.userType;
        this.article = response.data.article;
        this.dashboardView = response.data.dashboardView;
        this.errorMessage = this.article.errorMessage;
      },
      (error: any) => {
        this.errorMessage = 'Error retrieving article data.';
      }
    );
  }
  
}