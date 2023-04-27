import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public listing = listing;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public listingdetails = listing;
  public setListing(id: any) {
    this.listingdetails = listing.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setListing(this.router.snapshot.params.id);
  }

  // settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '.listing-banner-inner .slider-prev',
    nextArrow: '.listing-banner-inner .slider-next',
  }

}
