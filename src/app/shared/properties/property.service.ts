import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { advertisement } from '../model/advertisement';
import { Type } from '../model/property';
import { map } from 'rxjs/operators';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  baseUrl = 'http://localhost:8089/api/ad';

  constructor(private http:HttpClient) {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjUzMDQ2OTgyIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlVTRVIifV0sImVtYWlsIjoibW9oYW1lZC5iZW5yYWJhaEBnbWFpbC5jb20iLCJzdWIiOiJtb2hhbWVkIiwiaWF0IjoxNjgzNzczMzA1LCJleHAiOjE2ODM3NzQ3NDV9.XmfAbqbqaJLvQKTq3IIGjXQGLMrzoTYjPBeVYmxLUGI');
  }


  getAdByiD(id: number): Observable<advertisement> {
    return this.http.get<advertisement>("http://localhost:8089/api/ad/getByid/" + id);
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
  
  /*
  public getHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    });
  }*/
  public getHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    //const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
    //const boundary='--------------------------'+Math.random().toString(36).substring(2);
    const boundary = 'boundary-' + Math.random().toString().substring(2);

    return new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data; boundary=' + boundary,
      'Access-Control-Allow-Origin': '*'
    });

  }
  
  addAdveretisement(title: string, price: any, description: string, typeAd: string, size:string, type: string, rooms:string, 
    parking: string, yardSpace: string, garage: string, region: string, ville: string, photo: any){
    const header = this.getHeader();
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('price', price.toString());
    formData.append('description', description);
    formData.append('typeAd', typeAd);
    formData.append('size', size.toString());
    formData.append('type', type);
    formData.append('rooms', rooms.toString());
    formData.append('parking', parking.toString());
    formData.append('yardSpace', yardSpace.toString());
    formData.append('garage', garage.toString());
    formData.append('region', region);
    formData.append('ville', ville);
    //const photos:File[]=[];
    
    if (photo) {
      for (let i = 0; i < photo.length; i++) {
        formData.append('photo', photo[i]);
        //photos.push(photo[i]);
      }
      
    }else{
      formData.append('photo', '');
    }
    
    

    return this.http.post("http://localhost:8089/api/ad/addAd",formData,{headers:header});
  }


  public getHeaderz(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      //'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary123',
      'Access-Control-Allow-Origin': '*'
    });
  }

  addAdvertisement(formData: FormData){
    const header = this.getHeaderz();
    return this.http.post("http://localhost:8089/api/ad/addAd",formData,{headers:header});
  }

  


  updateAdvertisement(id: number, title: string, price: string, description: string, typeAd: string, size:any, type: string, rooms:any, 
    parking: any, yardSpace: any, garage: any, region: string, ville: string, photo: any[]): Observable<any> {
    console.log('aaaaaaa');
    const header = this.getHeaders();
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('typeAd', typeAd);
    formData.append('size', size.toString());
    formData.append('type', type);
    formData.append('rooms', rooms !== null ? rooms.toString() : undefined); // Change null to undefined
    formData.append('parking', parking.toString());
    formData.append('yardSpace', yardSpace.toString());
    formData.append('garage', garage.toString());
    formData.append('region', region);
    formData.append('ville', ville);
    if (photo) {
      for (let i = 0; i < photo.length; i++) {
        formData.append('photo', photo[i],photo[i].name);
      }
    }
    console.log(formData,'photo checking')
    return this.http.put<advertisement>("http://localhost:8089/api/ad/updateAd/"+id ,formData,{headers:header});
  }

  updateAd(id:number,formData: FormData){
    const header = this.getHeaderz();
    return this.http.put("http://localhost:8089/api/ad/updateAd/"+id ,formData,{headers:header});

  }

  recentListings():Observable<advertisement[]>{
    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/getRecentNonScrapedAds");
  }

  searchScrapedADS(typeAd?: string, typeProp?: string, region?: string, ville?: string, rooms?: number,
    parking?: boolean, garage?: boolean, maxPrice?: number, minPrice?: number,
    minSize?: number, maxSize?: number):Observable<advertisement[]>{
    const header = this.getHeaders();

    let params = new HttpParams();

    if (typeAd) {
    params = params.set('typeAd', typeAd);
    }
    if (typeProp) {
    params = params.set('typeProp', typeProp);
    }
    if (region) {
    params = params.set('region', region);
    }
    if (ville) {
    params = params.set('ville', ville);
    }
    if (rooms) {
    params = params.set('rooms', rooms.toString());
    }
    if (parking !== undefined) {
    params = params.set('parking', parking.toString());
    }
    if (garage !== undefined) {
    params = params.set('garage', garage.toString());
    }
    if (maxPrice) {
    params = params.set('maxPrice', maxPrice.toString());
    }
    if (minPrice) {
    params = params.set('minPrice', minPrice.toString());
    }
    if (minSize) {
    params = params.set('minSize', minSize.toString());
    }
    if (maxSize) {
    params = params.set('maxSize', maxSize.toString());
    }
  
    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/search" ,{ params , headers:header });

  }

  searchNotScrapedAds(typeAd?: string, typeProp?: string, region?: string, ville?: string, rooms?: number,
    parking?: boolean, garage?: boolean, maxPrice?: number, minPrice?: number,
    minSize?: number, maxSize?: number): Observable<advertisement[]> {
    let params = new HttpParams();

    if (typeAd) {
    params = params.set('typeAd', typeAd);
    }
    if (typeProp) {
    params = params.set('typeProp', typeProp);
    }
    if (region) {
    params = params.set('region', region);
    }
    if (ville) {
    params = params.set('ville', ville);
    }
    if (rooms) {
    params = params.set('rooms', rooms.toString());
    }
    if (parking !== undefined) {
    params = params.set('parking', parking.toString());
    }
    if (garage !== undefined) {
    params = params.set('garage', garage.toString());
    }
    if (maxPrice) {
    params = params.set('maxPrice', maxPrice.toString());
    }
    if (minPrice) {
    params = params.set('minPrice', minPrice.toString());
    }
    if (minSize) {
    params = params.set('minSize', minSize.toString());
    }
    if (maxSize) {
    params = params.set('maxSize', maxSize.toString());
    }
  
    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/searchNotScraped", { params });
  }

  // Favorties  
  addToFavorite(id:number):Observable<boolean>{
    const header = this.getHeaders();
    return this.http.patch<boolean>("http://localhost:8089/api/ad/addFavorite/"+id,{},{ headers: header });
  }

  consultFavorites():Observable<advertisement[]>{
    const header = this.getHeaders();
    return this.http.get<advertisement[]>("http://localhost:8089/api/ad/favorites",{headers:header});
  }
  
  checkIdAdInFav(id:number):Observable<boolean>{
    const header = this.getHeaders();
    return this.http.get<boolean>("http://localhost:8089/api/ad/checkAdExistsInFav/"+id,{headers:header});
  }

  deleteFavorite(id:number):Observable<boolean>{
    const header = this.getHeaders();
    return this.http.delete<boolean>("http://localhost:8089/api/ad/removeFavorite/"+id,{headers:header});
  }

  currentLikes(id:number):Observable<number>{
    return this.http.get<number>("http://localhost:8089/api/ad/adLikes/"+id);
  }
  //contact owner

  contactOwner(id: number, message: string, email: string, firstName: string, lastName: string) :Observable<any>{
    const  url="http://localhost:8089/api/ad/"+id+"/contactOwner";
    const formData = new FormData();
    formData.append('message', message);
    formData.append('email', email);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    /*return this.http.post(url,formData).pipe(
      map((response: any) => response.body.message)
    );*/

    return this.http.post(url,formData, { responseType: 'text' });

  }


  //getting the user by token : 

  getUserByToken(): Observable<User> {
    const header = this.getHeaders();
    return this.http.get<User>('http://localhost:8089/api/account/profile',{headers:header});
  }


   
}
