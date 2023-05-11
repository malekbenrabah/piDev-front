import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { TypeAd, advertisement } from 'src/app/shared/model/advertisement';
import { Type } from 'src/app/shared/model/property';
import { PropertyService } from 'src/app/shared/properties/property.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  @ViewChild('updateModal') updateModal:ElementRef;
  modalAd: advertisement;
  constructor(private propertyService:PropertyService,private ngbModal:NgbModal) { }
 
  listing:advertisement[];
  pagedListing: advertisement[] = [];
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    
    this.loadListing();

  }

  loadListing(): void {
    this.propertyService.recentListings().subscribe((res: advertisement[]) => {
      this.listing = res;
      this.updatePagedListing();
    });
  }

  updatePagedListing(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedListing = this.listing.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedListing();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedListing();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedListing();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.listing.length / this.pageSize);
  }


  //modal : 
  
  title:string="";
  selectedTypeAd:TypeAd;
  selectedType:Type;
  price:string="";
  size:any="";
  description:string="";
  region:string="";
  ville:string="";
  garage:boolean;
  parking:boolean;
  rooms:number;
  yardSpace:string="";
  photo:any;
 id:number;
 images:string[]=[];
 date:any;
 

  test: advertisement;
  test$: Observable<advertisement>;
  
  openModalUpdate(content:any,id:number){
    this.id=id;
  
    
    this.test$ = this.propertyService.getAdByiD(this.id);
    this.test$.subscribe((res: advertisement) => {
      this.test = res;
      this.region = this.test.property.region;
      this.ville = this.test.property.ville;
      // Assign values to the properties for initialization
      this.title = this.test.title;
      this.selectedTypeAd = this.test.typeAd;
      this.selectedType = this.test.property.type;
      this.price = this.test.price;
      this.size = this.test.property.size;
      this.description = this.test.description;
      this.rooms = this.test.property.rooms;
      this.garage = this.test.property.garage;
      this.parking = this.test.property.parking;
      this.ville=this.test.property.ville;
      this.images=this.test.property.photo;
      this.date=this.test.created_at;
      console.log("test get ad by ID: " + JSON.stringify(this.test));
    
  });

  this.ngbModal.open(this.updateModal,{ size: 'lg', centered: true }) ;
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




