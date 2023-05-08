import { Component, AfterContentInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import listing from '../../../../data/listings.json';
import category from '../../../../data/category.json';
import agents from '../../../../data/agents.json';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { advertisement } from 'src/app/shared/model/advertisement';
import { SharedServiceService } from 'src/app/shared/properties/shared-service.service';
import { User } from 'src/app/shared/model/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { combineLatest, forkJoin, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit, OnInit {
  @ViewChild('carouselModalContent') carouselModalContent: any;

  constructor(private router: ActivatedRoute, private propertyService:PropertyService,private sharedService: SharedServiceService,private modalService: NgbModal,private httpClient: HttpClient) { }
  // pagination
  page: number = 1;
  //public listing = listing;
  //public agents = agents;
  //public Singlecategory = category;
  //public category = category;
 
  
 

  searchResults:advertisement[];
  public ads:advertisement[];
  public findByType:boolean=false;
  searchResultScraped:advertisement[];
  user:User;
  premium:boolean;
  ngOnInit(): void {
    if(this.router.snapshot.params.type){
      this.findByType=true;
      console.log(this.router.snapshot.params.type , ' :type from List Grid');
      /*
      this.propertyService.getAdsByType(this.router.snapshot.params.type).subscribe(advertisements => {
        this.ads = advertisements; 
        console.log(this.ads,' ads by type from listing grid');
      });*/
      this.sharedService.searchResults$.subscribe(results => {
        this.ads = results;
        console.log(this.ads,'search results = getting the result from shopsidebar , GRID');
      });
    }else{
    
      this.propertyService.recentListings().subscribe((res:advertisement[])=>{
        this.ads=res,
        console.log(this.ads,'all ads from listing grid');
      });

      // getting the search results : 
      this.sharedService.searchResults$.subscribe(results => {
        this.searchResults = results;
        console.log(this.searchResults,'search results = getting the result from shopsidebar , GRID');
      });
    }

    /*
    //checking if the user is premium or not 
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };

    


  
    this.httpClient.get('http://localhost:8089/api/ad/search',{headers}).subscribe(
      (response: any) => {
        // Handle successful response here
       
        this.premium=true;
        console.log(this.premium,' checking if the user is premium : GRID');
      },
      (error: HttpErrorResponse) => {
        // Handle error response here
        console.error(error);

        if (error.status === 401) {
          this.premium = false;
          console.log(this.premium,' checking if the user is premium : GRID');
        }
      }
    );*/


    this.sharedService.getPremium().subscribe((premium: boolean) => {
      // Handle the premium value
      console.log('GRID:Premium value: ', premium);
      this.premium = premium;
    });

    this.sharedService.searchResultsScraped$.subscribe((data)=>{
      console.log(data.advertisements , 'getting scraped ads from shopqisebar : GID');
      console.log(data.user , 'getting scraped ads from shopqisebar : GID');
      this.searchResults=data.advertisements;
      this.user=data.user;
    });
   





    

  }
  
  ngAfterContentInit(): void {
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

   //gallery Modal 
   selectedListing: any;
   openCarouselModal(item: any){
     this.selectedListing = item;
     const modalRef = this.modalService.open(this.carouselModalContent, { size: 'lg', centered: true });
   }


  //aaa

  /*
    public getAuthor(items: string | any[]) {
      var elems = agents.filter((item: { id: string; }) => {
        return items.includes(item.id)
      });
      return elems;
    }

    // Category Filter
    public setCategory(id: any) {
      this.category = id;
    }
    public getCategory() {
      return this.category;
    }
    public getPostsByCategory(catId) {
      return this.listing.filter(item => { return item.categories.includes(parseInt(catId)) });
    }

    // Fetch All filter
    public setPosts() {
    var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.listing = postsByCategory;
    }
    
  }*/

}
