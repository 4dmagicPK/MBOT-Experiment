import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { superadminComponent } from './superadmin/superadmin.component';
import { SignupComponent } from './signup/signup.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TeaserComponent } from './teaser/teaser.component';
import { VideoWallComponent } from './video-wall/video-wall.component';
import { ArticleListComponentComponent } from './article-list-component/article-list-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerBoxComponent } from './container-box/container-box.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';

import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


import {MatCardModule} from '@angular/material/card';
import {NgFor} from '@angular/common';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { MatIconModule } from '@angular/material/icon';
import { CalculationComponent } from './calculation/calculation.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CancellationOrderComponent } from './cancellation-order/cancellation-order.component';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    NgFor,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    superadminComponent,
    SignupComponent,
    SocialMediaComponent,
    AdminDashboardComponent,
    SuperAdminDashboardComponent,
    UserDashboardComponent,
    StickyFooterComponent,
    NewsletterComponent,
    TeaserComponent,
    VideoWallComponent,
    ArticleListComponentComponent,
    NavbarComponent,
    SliderComponent,
    ContainerBoxComponent,
    AdminNavbarComponent,
    ShoppingCartComponent,
    WaitingListComponent,
    CalculationComponent,
    SingleOrderComponent,
    CancellationOrderComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private titleService: Title, private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.getTitle())
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
}

private getTitle(): string {
  const title = 'MBOT - Home'; // Default title
  const currentRoute = this.router.routerState.snapshot.root;
  let child = currentRoute;
  while (child.firstChild) {
    child = child.firstChild;
  }
  if (child.data && child.data.title) {
    return child.data.title;
  }
  return title;
}
}



