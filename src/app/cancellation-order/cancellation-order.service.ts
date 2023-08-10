import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CancellationOrderService {

  constructor(private http:HttpClient) { }
  getCancellationOrderData(){
    return this.http.get('assets/mockup/cancellation-order.json')
  }

}
