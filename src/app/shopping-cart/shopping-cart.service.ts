import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http:HttpClient) { }
  getShoppingData(){
    return this.http.get('assets/mockup/shopping-cart.json')
  }
}
