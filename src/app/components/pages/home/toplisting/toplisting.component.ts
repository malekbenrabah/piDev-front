import { Component, OnInit } from '@angular/core';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-toplisting',
  templateUrl: './toplisting.component.html',
  styleUrls: ['./toplisting.component.css']
})
export class ToplistingComponent implements OnInit {

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
  ngOnInit(): void {
  }

}
