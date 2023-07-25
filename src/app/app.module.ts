import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
