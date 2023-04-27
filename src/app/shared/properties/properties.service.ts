import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import { advertisement } from '../model/advertisement';
@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  propertiesUrl="http://localhost:8089/api/ad/getAdsNotPremiumNotP"; 

  
  constructor(private http:HttpClient) {
    this.getProperties().subscribe();
   } 

  getProperties(): Observable<advertisement[]> {
    return this.http.get<advertisement[]>(this.propertiesUrl);
  }
  
}
