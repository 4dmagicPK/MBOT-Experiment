import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list-component',
  templateUrl: './article-list-component.component.html',
  styleUrls: ['./article-list-component.component.less']
})
export class ArticleListComponentComponent implements OnInit {
  userType: string | undefined;
  articles: any[] = [];
  dashboardView: any;
  errorMessage!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/mockup/articles_list.json').subscribe(data => {
      this.articles = data.articles.map((article: any) => ({
        ...article,
        isOpen: true
      }));
      this.userType = data.userType;
      this.dashboardView = data.dashboardView;
    });
  }

  toggleContainer(article: any) {
    article.isOpen = !article.isOpen;
  }

  isContainerOpen(article: any): boolean {
    return article.isOpen;
  }
}






