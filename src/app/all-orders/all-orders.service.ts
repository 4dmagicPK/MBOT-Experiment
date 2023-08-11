import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {

  constructor(private http:HttpClient) { }
  getallOrdersData(){
    return this.http.get('assets/mockup/all-orders.json')
  }

}
