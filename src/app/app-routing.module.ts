import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
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

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'superadmin',
        component: superadminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.superadmin] }
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'signup',
        component: SignupComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'social-media', 
        component: SocialMediaComponent, 
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin,Role.superadmin, Role.User] }
    },

    { 
        path: 'admin-dashboard', 
        component: AdminDashboardComponent 
    },
    { 
        path: 'super-admin-dashboard',   //It leads to superadmin dashboard additional information 
        component: SuperAdminDashboardComponent
    },
    { 
        path: 'user-dashboard', 
        component: UserDashboardComponent // It leads to additional information of user
    },
    {
        path:'sticky-footer',
        component: StickyFooterComponent
    },
    {
        path:'newsletter',
        component:NewsletterComponent
    },
    {
        path:'teaser',
        component:TeaserComponent
    },
    {
        path:'video_wall',
        component:VideoWallComponent
    },
    { 
        path: 'article-list-component', 
        component: ArticleListComponentComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
