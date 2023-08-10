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
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component'
import {WaitingListComponent} from './waiting-list/waiting-list.component'
import { SingleOrderComponent } from './single-order/single-order.component';
import { CancellationOrderComponent } from './cancellation-order/cancellation-order.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { title: 'MBOT - Home', roles: [Role.Admin,Role.superadmin, Role.User] },
        pathMatch: 'full'
    },
    {
        path: 'superadmin',
        component: superadminComponent,
        canActivate: [AuthGuard],
        data: { title: 'MBOT - Super Admin', roles: [Role.superadmin] }
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { title: 'MBOT - Admin', roles: [Role.Admin] }
    },
    {
        path: 'signup',
        component: SignupComponent,
        data: { title: 'MBOT - Signup'}
    },

    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'MBOT - Login'}
    },
   
    
    { 
        path: 'social-media', 
        component: SocialMediaComponent, 
        canActivate: [AuthGuard],
        data: { title: 'MBOT - Social Media',roles: [Role.Admin,Role.superadmin, Role.User] }
    },

    { 
        path: 'admin-dashboard', 
        component: AdminDashboardComponent,
        data: { title: 'MBOT - Admin-Dashboard'} 
    },
    { 
        path: 'super-admin-dashboard',   //It leads to superadmin dashboard additional information 
        component: SuperAdminDashboardComponent,
        data: { title: 'MBOT - Super-Admin-Dashboard'} 
    },
    { 
        path: 'user-dashboard', 
        component: UserDashboardComponent, // It leads to additional information of user
        data: { title: 'MBOT - User-Dashboard'} 
    },
    {
        path:'sticky-footer',
        component: StickyFooterComponent
    },
    {
        path:'newsletter',
        component:NewsletterComponent,
        data: { title: 'MBOT - Newsletter'} 
    },
    {
        path:'teaser',
        component:TeaserComponent,
        data: { title: 'MBOT - Teaser'} 
    },
    {
        path:'video_wall',
        component:VideoWallComponent,
        data: { title: 'MBOT - Video_wall'} 
    },
    { 
        path: 'article-list-component', 
        component: ArticleListComponentComponent,
        data: { title: 'MBOT - Article-List'} 
    },
    { 
        path: 'shopping-cart', 
        component: ShoppingCartComponent,
        data: { title: 'MBOT - Shopping-Cart'} 
    },
    { 
        path: 'waiting-list', 
        component: WaitingListComponent,
        data: { title: 'MBOT - Waiting-List'} 
    },
    { 
        path: 'single-order', 
        component: SingleOrderComponent,
        data: { title: 'MBOT - Single-Order'} 
    },
    { 
        path: 'cancellation-order', 
        component: CancellationOrderComponent,
        data: { title: 'MBOT - Cancellation-order'} 
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[]
})
export class AppRoutingModule { }
