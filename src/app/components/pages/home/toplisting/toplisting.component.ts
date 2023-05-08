import { Component, OnInit, ViewChild } from '@angular/core';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { advertisement } from 'src/app/shared/model/advertisement';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toplisting',
  templateUrl: './toplisting.component.html',
  styleUrls: ['./toplisting.component.css']
})
export class ToplistingComponent implements OnInit {
  @ViewChild('carouselModalContent') carouselModalContent: any;

  constructor(private propertyService:PropertyService, private modalService: NgbModal) { }
  //public listing = listing;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: '.top-listings .slider-prev',
    nextArrow: '.top-listings .slider-next',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      },
    ]
  }
  public listing:advertisement[];
  ngOnInit(): void {
    this.propertyService.getTopAds().subscribe(res=>{console.log(res,"top listings"); this.listing=res});
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
  

}
