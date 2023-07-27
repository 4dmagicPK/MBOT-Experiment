import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sticky-footer',
  templateUrl: './sticky-footer.component.html',
  styleUrls: ['./sticky-footer.component.less']
})
export class StickyFooterComponent implements OnInit {
  footerData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/mockup/footer.json').subscribe((data: any) => {
      this.footerData = data;
    });
  }

}

