import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SingleOrderService{

  constructor(private http:HttpClient) { }
  getSingleOrderData(){
   return this.http.get('assets/mockup/single-order.json')
  }

}
