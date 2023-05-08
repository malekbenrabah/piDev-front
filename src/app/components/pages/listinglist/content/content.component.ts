import { Component, Input, OnInit, ViewChild } from '@angular/core';

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
  public listing:advertisement[];
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
  ngOnInit(): void {
   
    
    this.propertyService.recentListings().subscribe((res:advertisement[])=>{
      this.listing=res,
      console.log(this.listing,'all listings by recent ');
    });
    
    this.sharedService.searchResults$.subscribe(results => {
      this.searchResults = results;
      console.log(this.searchResults,' getting the result from shopsidebar : LIST');
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

    


  }

  addFavorite(id:number){
    console.log('adding to favorite');
    this.propertyService.addToFavorite(id).subscribe((res)=>{
      console.log('favorite');

    },
    (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 401) {
        //this.router.navigate(['/login']);
        this.router.navigateByUrl('/login');
      }
    }
    );
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
