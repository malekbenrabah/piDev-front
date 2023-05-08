import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import listing from '../../../data/listings.json';
import { TypeAd, advertisement } from 'src/app/shared/model/advertisement';
import { PropertiesService } from 'src/app/shared/properties/properties.service';
import { Type } from 'src/app/shared/model/property';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { SharedServiceService } from 'src/app/shared/properties/shared-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/shared/model/User';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;





@Component({
  selector: 'app-shopsidebar',
  templateUrl: './shopsidebar.component.html',
  styleUrls: ['./shopsidebar.component.css']
})
export class ShopsidebarComponent implements OnInit {

  //@Output() searchResults = new EventEmitter<advertisement[]>();

  constructor( private propertyService:PropertyService, private sharedService: SharedServiceService,private router: ActivatedRoute,private route: Router) {
   
  }

  /* p range 1
  priceRange = 50;

  onPriceRangeChange(value: string) {
    this.priceRange = parseInt(value, 10);
    console.log(`Price range changed to ${this.priceRange}`);
  }*/

  minP = 0;
  maxP = 10000;

onMinPriceChange(value: string) {
  this.minPrice = parseInt(value, 10);
  console.log(`Minimum price changed to ${this.minPrice}`);
}

onMaxPriceChange(value: string) {
  this.maxPrice = parseInt(value, 10);
  console.log(`Maximum price changed to ${this.maxPrice}`);
}

  //public listing = listing;
  public listing:advertisement[];
  
  ngOnInit(): void {
    //this.propService.getProperties().subscribe((res:advertisement[])=>{this.listing=res, console.log(this.listing,'res')});
    this.propertyService.recentListings().subscribe((res:advertisement[])=>{
      this.listing=res,
      console.log(this.listing,'recent listings');
    });


    if(this.router.snapshot.params.type){

      this.findByType=true;

      const typeAd=this.router.snapshot.params.type;
      this.type = typeAd;
      console.log(this.router.snapshot.params.type,' : location');
      console.log(this.status,'status');
      console.log(this.type,'type');
      console.log(Number(this.rooms),'rooms');
      this.propertyService.searchNotScrapedAds(this.status, this.type, this.location, this.ville,Number(this.rooms),
      this.parking, this.garage, this.maxPrice, this.minPrice,
      this.minSize).subscribe((res:advertisement[])=>{
        this.result=res;
        console.log(this.result, 'result search from shopsidebar');
        //this.searchResults.emit(res); // emit the search results
        this.sharedService.setSearchResults(this.result);
      });
    }
    
    
    


    // price range 1 :
    /*
    const slider = document.querySelector('input[type="range"]');
    if (slider) {
      slider.addEventListener('mousemove', (event: MouseEvent) => {
        const value = (<HTMLInputElement>event.target).value;
        (<HTMLInputElement>event.target).setAttribute('title', value);
      });
    }*/

  }

  updateType(selectedType: string) {
    this.type = selectedType;
  
     // Update the URL based on the selected type
    if (this.findByType) {
      const segments = this.route.url.split('/'); // Split the URL into segments
      segments[segments.length - 1] = this.type; // Update the last segment with the selected type
      const newPath = segments.join('/'); // Join the segments back into a new path

      this.route.navigateByUrl(newPath); // Navigate to the new path
    }

    // Perform additional logic when the selected type is 'Any Type'
    if (this.type === 'Any Type') {
      this.type = undefined;
      if (this.route.url === '/listing-grid' || this.route.url.includes('/listing/cat/')) {
        this.route.navigateByUrl('/listing-grid'); // Redirect to the listing-grid URL
        
      }else{
        this.route.navigateByUrl('/listing-list');
      }
      return; // Exit the function to prevent further execution
    }
  }

  options = {
    allowClear: false
  };

  "locationlist": string[] = [
    "Any Location",
    "Tunis",
    "Ariana",
    "Sousse",
    "Bizerte",
    "Manouba",
    "Ben Arous",
    "Zaghouan",
    "Nabeul",
    "Jendouba",
    "Béja",
    "Kef",
    "Siliana",
    "Sousse",
    "Monastir",
    "Mahdia",
    " Kairouan",
    "Kasserine",
    "Sidi Bouzid",
    " Sfax",
    "Gabès",
    "Médenine",
    "Tataouine",
    "Gafsa",
    "Tozeur",
    "Kébili"
    ];
  //"statuslist": string[] = Object.values(TypeAd);
  "statuslist": string[] = ['Any Status', ...Object.values(TypeAd)];

  "pricerangelist": string[] = [
    "Any Range",
    "$60k - $80k",
    "$80k - $100k",
    "$100k - $120k",
    "$120k - $140k",
    "$140k - $160k",
    "$160k - $180k",
    "$180k - $200k"
  ];
  "bedslist": string[] = [
    "Any amount",
    "1",
    "2",
    "3",
    "4",
    "5+"
  ];
  "bathroomslist": string[] = [
    "Any amount",
    "1",
    "2",
    "3",
    "4",
    "5+"
  ];
  //"typelist"=Object.values(Type);
  "typelist": string[] = ['Any Type', ...Object.values(Type)];



  "diameterlist": string[] = [
    "Any Range",
    "Within 2 miles",
    "Within 4 miles",
    "Within 6 miles",
    "Within 8 miles",
    "Within 10 miles",
    "Within 22 miles"
  ];
  "floorlist": string[] = [
    "Any floor",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th"
  ];
  "sortbylist": string[] = [
    "Any",
    "Top Selling",
    "Most Popular",
    "Price: High - Low",
    "Price: Low - High",
    "Number of baths",
    "Number of beds"
  ]

  //search
  //params 
  location?:string;
  status?:string;
  type?:string;
  rooms?:string;
  garage?:boolean;
  ville?: string;
  parking?: boolean;
  maxPrice?: number;
  minPrice?: number;
  minSize?: number;
  maxSize?: number;
  

  

  

  result:advertisement[];
  public findByType:boolean=false;
  search(){

    if(this.router.snapshot.params.type){

      this.findByType=true;

      const typeAd=this.router.snapshot.params.type;
      this.type = typeAd;
      console.log(this.router.snapshot.params.type,' : location');
      console.log(this.status,'status');
      console.log(this.type,'type');
      console.log(Number(this.rooms),'rooms');
      this.propertyService.searchNotScrapedAds(this.status, this.type, this.location, this.ville,Number(this.rooms),
      this.parking, this.garage, this.maxPrice, this.minPrice,
      this.minSize).subscribe((res:advertisement[])=>{
        this.result=res;
        console.log(this.result, 'result search from shopsidebar');
        //this.searchResults.emit(res); // emit the search results
        this.sharedService.setSearchResults(this.result);
      });
    }else{

      console.log(this.location,' : location');
      console.log(this.status,'status');
      console.log(this.type,'type');
      console.log(Number(this.rooms),'rooms');
      this.propertyService.searchNotScrapedAds(this.status, this.type, this.location, this.ville,Number(this.rooms),
      this.parking, this.garage, this.maxPrice, this.minPrice,
      this.minSize).subscribe((res:advertisement[])=>{
        this.result=res;
        console.log(this.result, 'result search from shopsidebar');
        //this.searchResults.emit(res); // emit the search results
        this.sharedService.setSearchResults(this.result);
      });

    }
    

  }
  scrapedAds:advertisement[];
  User:User;
  public userId:number;
  public isAuthenticated;
  public premium:boolean;
  searchSraped(){

    this.propertyService.getUserByToken().subscribe((user: User) => {
      this.User = user;
      this.userId=user.id;
      console.log(this.User.id,' User id, testing scraping, SHOP_SIDE_BAR : get UserBytoken()');
      console.log(this.User,' User id, testing scraping, SHOP_SIDE_BAR : get UserBytoken()');

    },
    (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 401) {
        this.userId=null;
        this.isAuthenticated = false;
        console.log(this.userId ,' userId from shop_sidebar TOKEN EXPIRED');
        this.route.navigate(['/login']);
      }
    });
  

    this.propertyService.searchScrapedADS(this.status, this.type, this.location, this.ville,Number(this.rooms),
    this.parking, this.garage, this.maxPrice, this.minPrice,
    this.minSize).subscribe((res:advertisement[])=>{
      this.scrapedAds=res;
      console.log(this.scrapedAds, ' Scraped ADS result search from shopsidebar Scraped');
      console.log(this.userId, ' UserId result search from shopsidebar Scraped');
      this.sharedService.setSearchResultsScraped(this.User, this.scrapedAds);
      this.sharedService.setPremium(true);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 401) {
        this.sharedService.setPremium(false);
        console.log(this.userId ,' userId from shop_sidebar searchScrapedADS()');
        console.log(this.User,' User id, testing scraping, SHOP_SIDE_BAR : searchScrapedADS()');

      }else if (error.status === 403 && error.message.includes('You are not allowed to see premium ads')) {
        this.premium = false; 
        console.log(this.premium,' user premuim from SHOP_SIDE_BAR');
      }
    }
    );

  }

 // price range : 

  ngAfterViewInit() {
    $("#slider-range").slider({
      range: true,
      min: 130,
      max: 500,
      values: [130, 250],
      slide: (event, ui) => {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });

    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  }



 

  

  

 

}
