import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { advertisement } from '../model/advertisement';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  baseUrl = 'http://localhost:8089/api/ad';

  constructor(private http:HttpClient) {}

  
    getAdvertisementById(id: number): Observable<advertisement> {
      
      return this.http.get<advertisement>(`${this.baseUrl}/getById/${id}`);
    
    }

    getMinPrice(id:number): Observable<number>{
      return this.http.get<number>("http://localhost:8089/api/ad/getMinprice/"+id);
    }

    getMaxPrice(id:number): Observable<number>{
      return this.http.get<number>("http://localhost:8089/api/ad/getMaxprice/"+id);
    }

    getSimilarAds(id:number):Observable<advertisement[]>{
      return this.http.get<advertisement[]>("http://localhost:8089/api/ad/getSimilarAds/"+id);
    }

    addAd(advertisement: any, photos: FileList): Observable<any> {
      const formData = new FormData();
      formData.append('title', advertisement.title);
      formData.append('price', advertisement.price);
      formData.append('description', advertisement.description);
      formData.append('typeAd', advertisement.typeAd);
      formData.append('size', advertisement.size);
      formData.append('type', advertisement.type);
      formData.append('rooms', advertisement.rooms);
      formData.append('parking', advertisement.parking);
      formData.append('yardSpace', advertisement.yardSpace);
      formData.append('garage', advertisement.garage);
      formData.append('region', advertisement.region);
      formData.append('ville', advertisement.ville);
      for (let i = 0; i < photos.length; i++) {
        formData.append('photo', photos[i]);
      }
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.post("http://localhost:8089/api/ad/addAd", formData, { headers });
    }
}
