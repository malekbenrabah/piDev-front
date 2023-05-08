import { Component, OnInit } from '@angular/core';
import { advertisement } from 'src/app/shared/model/advertisement';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   // pagination
  page: number = 1;
  count:number=0;
  tableSize:number=4;

  public isAuthenticated;

  constructor(private propertyService:PropertyService,private router: Router) { }
  favoriteAds:advertisement[];
  test:boolean=true;
  ngOnInit(): void {
    this.propertyService.consultFavorites().subscribe((res:advertisement[])=>{
      this.favoriteAds=res;console.log(this.favoriteAds,'FAVORITE ADS');
      this.isAuthenticated = true;
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 401) {
        this.isAuthenticated = false;
        // Rediriger vers la page de connexion
        this.router.navigate(['/login']);
      }
    }
    );

    
  }
 
  RemoveFavorite(id:number){
    console.log("remove favorite");
    this.propertyService.deleteFavorite(id).subscribe(res=>{console.log(res ,'remove FAV')});
   
    // window.location.reload();
    this.favoriteAds = this.favoriteAds.filter(ad => ad.id !== id);
  }

  
  checkAdInFavorite(id:number){
    this.propertyService.checkIdAdInFav(id).subscribe(res=>console.log('checking',res));
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
  }

}
