import { Component, OnInit } from '@angular/core';
import category from '../../../../data/category.json'
import listings from '../../../../data/listings.json'
import { Type } from 'src/app/shared/model/property';
import { advertisement } from 'src/app/shared/model/advertisement';
import { PropertiesService } from 'src/app/shared/properties/properties.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PropertyService } from 'src/app/shared/properties/property.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  types = Object.values(Type);


  typesWithImages = this.types.map((type, index) => {
    let image = '';
    let icon = '';
    let title='';
    switch(type) {
      case Type.House:
        image = 'assets/img/categories/1.jpg'; 
        icon = 'house';
        title = Type.House
        break;
      case Type.Appartment:
        image = 'assets/img/categories/2.jpg';
        icon = 'apartment';
        title=Type.Appartment
        break;
      case Type.Villa:
        image = 'assets/img/categories/3.jpg';
        icon = 'villa';
        title=Type.Villa
        break;
      case Type.Land:
        image = 'assets/img/categories/4.jpg';
        icon = 'location';
        title=Type.Land;
        break;
      case Type.Office:
        image = 'assets/img/categories/5.jpg';
        icon = 'company-1';
        title=Type.Office;
        break;
    }
    return { id: index + 1, type: type, image: image, icon: icon, title:title };
  });


  listing:advertisement[];
  constructor(private properties:PropertyService ) { }
  ngOnInit(): void {
    console.log(this.typesWithImages, 'types');
    //this.getAds();
  }
  
  getAds(){
    this.properties.recentListings().subscribe(res=>{console.log(res, 'all ads in categories component'); this.listing=res});
  }

  getNbAdsByType(type:Type):Observable<number>{
    
  //check if this.listing is already defined before calling this.properties.getProperties(). If this.listing is already defined, it can simply return the number of ads by type using of().
  // Otherwise, it can fetch the properties from the server and then return the number of ads by type. 

    if (this.listing) {
      const filteredAds = this.listing.filter(ad => ad.property.type === type);
      return of(filteredAds.length);
    } else {
      return this.properties.recentListings().pipe(
        map(listing => {
          this.listing = listing;
          const filteredAds = listing.filter(ad => ad.property.type === type);
          return filteredAds.length;
        })
      );
    }
   
  }

}
