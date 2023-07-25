import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminNavbarServiceService {

  constructor(private http:HttpClient) { }
  getAdminMenuItems(){
    return this.http.get('assets/mockup/admin-navbar.json');
  }
}
