import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

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
  ]

}
