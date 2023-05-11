import { Component, OnInit, ViewChild } from '@angular/core';
import listing from '../../../data/listings.json';
import agents from '../../../data/agents.json';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { advertisement } from 'src/app/shared/model/advertisement';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-similarlisting',
  templateUrl: './similarlisting.component.html',
  styleUrls: ['./similarlisting.component.css']
})
export class SimilarlistingComponent implements OnInit {
  @ViewChild('carouselModalContent') carouselModalContent: any;

  constructor(private router: ActivatedRoute, private propertyService:PropertyService,private modalService: NgbModal) { }
  //public listing = listing;

  
 public list:advertisement[];

  ngOnInit(): void {
    this.propertyService.getSimilarAds(Number(this.router.snapshot.params.id)).subscribe((data:advertisement[])=>{
      this.list=data;
      console.log("id : "+Number(this.router.snapshot.params.id))
      console.log(this.list,'Similar ADS');
    })
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

  //modal gallery 
  selectedListing: any;
  openCarouselModal(item: any){
    this.selectedListing = item;
    const modalRef = this.modalService.open(this.carouselModalContent, { size: 'lg', centered: true });
  }


















  // agents
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

}
