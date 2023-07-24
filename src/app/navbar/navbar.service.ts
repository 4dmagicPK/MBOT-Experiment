import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavbarService{
  constructor(private http:HttpClient) { }

  navbarDataMethod(){
   return this.http.get('assets/navbar.json');
  }
}
