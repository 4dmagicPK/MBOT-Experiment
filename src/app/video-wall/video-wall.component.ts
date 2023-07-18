import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-wall',
  templateUrl: './video-wall.component.html',
  styleUrls: ['./video-wall.component.less']
})
export class VideoWallComponent implements OnInit {

  closeContainer() {
    const container = document.getElementById("container");
    if (container) {
      container.style.display = "none";
    }
  }

  userType!: string;
  video_wall: any;
  dashboardView: any;
  errorMessage!: string;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
     // Simulating API call to fetch the video_wall data
     this.http.get('assets/video_wall.json').subscribe(
      (response: any) => {
        this.userType = response.userType;
        this.video_wall = response.data.video_wall;
        this.dashboardView = response.data.dashboardView;
        this.errorMessage = this.video_wall.errorMessage;
      },
      (error: any) => {
        this.errorMessage = 'Error retrieving video_wall data.';
      }
    );
  }
  
}