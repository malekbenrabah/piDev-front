import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { advertisement } from '../model/advertisement';
import { Type } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  baseUrl = 'http://localhost:8089/api/ad';

  constructor(private http:HttpClient) {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6Ijk2NTA4NDg5Iiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlVTRVIifV0sImVtYWlsIjoibWFsZWsuYmVucmFiYWgyQGdtYWlsLmNvbSIsInN1YiI6Im1hbGVrIiwiaWF0IjoxNjgyODU1MDcyLCJleHAiOjE2ODI4NTY1MTJ9.jOQs2woGSxTn1cso31iyCTrFxQ6np5uwQAQyyNXm8EA');

  }


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

  public getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }
  
  getUsersAd():Observable<advertisement[]> {
    const header = this.getHeaders();

    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/getUsersAd", { headers: header });
  }

  getUserAdsById(id: number): Observable<advertisement[]> {
    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/getAdsUser/" + id);
  }

  getAdsByType(type: Type): Observable<advertisement[]> {
    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/adsByType?type=" + type);
  }
  getNbAdsByType(type: Type): Observable<number> {
    return this.http.get<number>("http://localhost:8089/api/ad/adsByType?type=" + type);
  }

  getTopAds():Observable<advertisement[]>{
    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/getTopAds");
  }

  deleteAdvertisement(id:number): Observable<boolean>{
    const header = this.getHeaders();
    return this.http.delete<boolean>("http://localhost:8089/api/ad/deleteAd/"+id,{headers:header});
  }




   
}
