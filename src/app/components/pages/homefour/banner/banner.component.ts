import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  advanceMethod: boolean = true;
  advanceBtn() {
    this.advanceMethod = !this.advanceMethod;
  }

  ngOnInit(): void {
  }
  options = {
    allowClear: false
  };
  "locationlist": string[] = [
    "Any Location",
    "California, CA",
    "Lawndale, CA",
    "Stroudsburg, PA",
    "West Roxbury, MA",
    "Ponte Vedra Beach, FL",
    "Fort Worth, TX",
    "Willingboro, NJ"
  ];
  "statuslist": string[] = [
    "Any Status",
    "For Rent",
    "Featured",
    "For Sale",
    "Leased",
    "New Addition",
    "Sold",
    "Rental",
    "Reduced",
    "Special Offer"
  ];
  "pricerangelist": string[] = [
    "Any Range",
    "$60k - $80k",
    "$80k - $100k",
    "$100k - $120k",
    "$120k - $140k",
    "$140k - $160k",
    "$160k - $180k",
    "$180k - $200k"
  ];
  "bedslist": string[] = [
    "Any amount",
    "1",
    "2",
    "3",
    "4",
    "5+"
  ];
  "bathroomslist": string[] = [
    "Any amount",
    "1",
    "2",
    "3",
    "4",
    "5+"
  ];
  "typelist": string[] = [
    "Any Type",
    "House",
    "Apartment",
    "Condo",
    "Townhome",
    "Villa",
    "Duplex"
  ];
  "diameterlist": string[] = [
    "Any Range",
    "Within 2 miles",
    "Within 4 miles",
    "Within 6 miles",
    "Within 8 miles",
    "Within 10 miles",
    "Within 22 miles"
  ];
  "floorlist": string[] = [
    "Any floor",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th"
  ];
  "sortbylist": string[] = [
    "Any",
    "Top Selling",
    "Most Popular",
    "Price: High - Low",
    "Price: Low - High",
    "Number of baths",
    "Number of beds"
  ]

}
