import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

import {HomeService} from './home.service'

@Component({selector: 'app-home', templateUrl: 'home.component.html',styleUrls:["home.component.less"] })
export class HomeComponent {
    loading = false;
    user: User;
    userFromApi?: User;
    homeParagraphData:any;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private paragraphData:HomeService
    ) {
        this.user = <User>this.authenticationService.userValue;
        paragraphData.paragraph().subscribe((data)=>{
            this.homeParagraphData=data;
        })
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
}