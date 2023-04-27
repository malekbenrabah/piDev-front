import { Component, OnInit } from '@angular/core';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-listingslider',
  templateUrl: './listingslider.component.html',
  styleUrls: ['./listingslider.component.css']
})
export class ListingsliderComponent implements OnInit {

  constructor() { }
  public listing = listing;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Settings
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.listings .slider-prev',
    nextArrow: '.listings .slider-next',
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
