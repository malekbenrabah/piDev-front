import { Component, OnInit } from '@angular/core';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';
import { PropertiesService } from 'src/app/shared/properties/properties.service';
import { advertisement } from 'src/app/shared/model/advertisement';

@Component({
  selector: 'app-listingslider',
  templateUrl: './listingslider.component.html',
  styleUrls: ['./listingslider.component.css']
})
export class ListingsliderComponent implements OnInit {

  constructor(private propertiesService:PropertiesService) { }
  ads:advertisement[];
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
    this.propertiesService.getProperties().subscribe(res=>{console.log(res,"recent Listings"); this.ads=res});

  }



  public listing = listing;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
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
