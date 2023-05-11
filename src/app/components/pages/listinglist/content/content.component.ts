import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import category from '../../../../data/category.json';
import agents from '../../../../data/agents.json';
import { PropertiesService } from 'src/app/shared/properties/properties.service';
import { advertisement } from 'src/app/shared/model/advertisement';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/properties/shared-service.service';
import { User } from 'src/app/shared/model/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //@Input() searchResults: advertisement[] = [];
  @ViewChild('carouselModalContent') carouselModalContent: any;

  constructor(private propService:PropertiesService, private propertyService:PropertyService,private router: Router, private sharedService: SharedServiceService, private modalService: NgbModal,private httpClient: HttpClient) { }

  // pagination
  page: number = 1;
  count:number=0;
  tableSize:number=6;


  pageSize:number=6;
  //public listing = listing;
  public listing:advertisement[]=[];
  public category = category;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  /*
  result:advertisement[];
  onSearchResults(result: advertisement[]) {
    this.searchResults = result;
    console.log(this.result,' results search from content');
  }
  */

  searchResults:advertisement[];
  User:User;
  premium:boolean;
  user:User;
  favoriteAds:advertisement[];
  test:boolean=true;
  isFavoriteArray: boolean[] = []; 
  ngOnInit(): void {
   
    
    this.propertyService.recentListings().subscribe((res:advertisement[])=>{
      this.listing=res,
      console.log(this.listing,'all listings by recent ');
    
    });
    
    this.sharedService.searchResults$.subscribe(results => {
      this.searchResults = results;
      console.log(this.searchResults,' getting the result from shopsidebar : LIST');

      console.log('from LIST IS FAVADS');
      this.isFavoriteArray=[];
      this.searchResults.forEach((item) => {
        const isFavorite = this.isFavorite(item);
        this.isFavoriteArray.push(isFavorite);
      });
      console.log(this.isFavoriteArray, 'isFavoriteArray from SearchResults : LIST');
    });

    // getting scraped ADS 

    this.sharedService.getPremium().subscribe((premium: boolean) => {
      // Handle the premium value
      console.log('GRID:Premium value: ', premium);
      this.premium = premium;
    });

    this.sharedService.searchResultsScraped$.subscribe((data)=>{
      console.log(data.advertisements , 'getting scraped ads from shopqisebar : LIST');
      console.log(data.user , 'getting scraped ads from shopqisebar : LIST');
      this.searchResults=data.advertisements;
      this.user=data.user;
     

    });

    //Favorites : 

    // getting the user
    this.propertyService.getUserByToken().subscribe((user: User) => {
      this.User = user;
      console.log(this.User.id,' User id, Test UserByToken listingList FAV');
      console.log(this.User,' UserTest ,UserByToken listingList FAV');


      //getting the user's fav ads: 

      this.propertyService.consultFavorites().subscribe((res:advertisement[])=>{
        this.favoriteAds=res;
        console.log(this.favoriteAds,'USERs FAVORITE ADS');

        //FAV NO SEARCH :
       
        this.listing.forEach((item) => {
          const isFavorite = this.isFavorite(item);
          this.isFavoriteArray.push(isFavorite);
        });
        
      });
      console.log(this.isFavoriteArray, 'isFavoriteArray from Listing NO SEARCH');
     
    
    });

 

  }

  //fav 
  isFavorite(advertisement: advertisement): boolean {
    if (!this.favoriteAds) {
      return false;
    }

    const favoriteAd = this.favoriteAds.find((fav) => fav.id === advertisement.id);
    return !!favoriteAd;
  }


  //remove FAV :
  RemoveFavorite(id:number){
    console.log("remove favorite");
    this.propertyService.deleteFavorite(id).subscribe(res=>{
      console.log(res ,'remove FAV');
      // removing the deleted favorite from the favoriteAds array
      const index = this.favoriteAds.findIndex(ad => ad.id === id);
      if (index !== -1) {
        this.favoriteAds.splice(index, 1);
      }

      // recalculating isFavoriteArray based on the updated favoriteAds array
      this.isFavoriteArray = this.listing.map(item => this.isFavorite(item));

      console.log('hello from here DELETEFAV : serachResults');
      if(this.searchResults){
        this.isFavoriteArray=[];
        this.isFavoriteArray = this.searchResults.map(item => this.isFavorite(item));
        console.log(this.isFavoriteArray,' new isFavoriteArray SEARCH');
      }
    });
   
  }

 
  addFavorite(id:number){
    console.log('adding to favorite');
    // getting the user
    this.propertyService.getUserByToken().subscribe((user: User) => {
      this.User = user;
      console.log(this.User.id,' User id, Test UserByToken listingList FAV');
      console.log(this.User,' UserTest ,UserByToken listingList FAV');

    },
    (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 401) {
        this.router.navigate(['/login']);
      }
    });


    this.propertyService.addToFavorite(id).subscribe((res)=>{
      console.log('favorite');
      // fetching the new added favorite and update favoriteAds array
      this.propertyService.getAdByiD(id).subscribe((favorite: advertisement) => {
        // Add the newly added favorite to the favoriteAds array
        this.favoriteAds.push(favorite);

        
        // Recalculate isFavoriteArray based on the updated favoriteAds array NO SEARCH
        this.isFavoriteArray = this.listing.map(item => this.isFavorite(item));
        console.log('hello from here ADFAV : serachResults');
        
        if(this.searchResults){
          this.isFavoriteArray=[];
          this.isFavoriteArray = this.searchResults.map(item => this.isFavorite(item));
          console.log(this.isFavoriteArray,' new isFavoriteArray SEARCH');
        }
      },
      (error: HttpErrorResponse) => {
        console.log('Failed to fetch the newly added favorite');
      });
      
     
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 401) {
        //this.router.navigate(['/login']);
        this.router.navigateByUrl('/login');
      }
    });


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
  
  pagedListing() {
    let pages = [];
    for (let i = 0; i < this.listing.length; i += this.pageSize) {
      let page = this.listing.slice(i, i + this.pageSize);
      pages.push(page);
    }
    return pages;
  }

  //gallery Modal 
  selectedListing: any;
  openCarouselModal(item: any){
    this.selectedListing = item;
    const modalRef = this.modalService.open(this.carouselModalContent, { size: 'lg', centered: true });
  }

}
