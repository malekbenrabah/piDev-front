import { Component, OnInit } from '@angular/core';
import listing from '../../../../data/listings.json';
import mapdata from '../../../../data/mapdata.json';
import agents from '../../../../data/agents.json';
import 'leaflet';
declare let L;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public listing = listing;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public mapdata = mapdata;

  public icon = {
    icon: L.icon({
      iconSize: [50, 50],
      iconAnchor: [22, 41],
      popupAnchor: [2, -40],
      iconUrl: 'assets/img/misc/marker.png'
    })
  };

  ngOnInit() {
    const map = L.map('map', {
      style: 'mapbox://styles/mapbox/light-v10',
      center: [38.907, -77.04],
      zoom: 11.5,
      pitch: 45,
      container: 'map',
      antialias: true
    });
    var marker;
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (let i = 0; i < this.mapdata.length - 1; i++) {
      marker = L.marker(this.mapdata[i].geometry.coordinates, this.icon).addTo(map);
      marker.bindPopup('<div class="mapboxgl-popup mapboxgl-popup-anchor-top"><div class="mapboxgl-popup-tip"></div><img src="' + this.mapdata[i].properties.thumbnail + '" alt="' + this.mapdata[i].properties.title + '"/> ' +
        '<div class="acr-listing-popup-body"><h5><a href="#" title="' + this.mapdata[i].properties.title + '">' + this.mapdata[i].properties.title + '</a></h5> <span class="listing-price">' + this.mapdata[i].properties.price + '</span>' +
        '<p><i class="fas fa-map-signs"></i> ' + this.mapdata[i].properties.description + '</p> <div class="location-popup-meta"> <span><i class="fas fa-bed"></i>' + this.mapdata[i].properties.bed + '</span>' +
        '<span><i class="fas fa-bath"></i>' + this.mapdata[i].properties.bath + '</span><span><i class="fas fa-ruler-combined"></i>' + this.mapdata[i].properties.size + '</span> </div></div> </div>');
    }

  }
  advanceMethod: boolean = true;
  advanceBtn() {
    this.advanceMethod = !this.advanceMethod;
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
