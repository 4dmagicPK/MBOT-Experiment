import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WaitingListService {

  constructor(private http:HttpClient) { }
  getWaitingListData(){
    return this.http.get('assets/mockup/waiting-list.json')
  }

}
