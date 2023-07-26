import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http:HttpClient) { }

  sliderDataMethod(){
    return this.http.get('assets/mockup/home.json');
  }
}
