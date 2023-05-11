import { Component, OnInit, ViewChild } from '@angular/core';
import listing from '../../../../data/listings.json';
import mapdata from '../../../../data/mapdata.json';
import agents from '../../../../data/agents.json';
import 'leaflet';
import { LocationService } from 'src/app/shared/properties/location.service';
import { TypeAd, advertisement } from 'src/app/shared/model/advertisement';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { combineLatest, forkJoin } from 'rxjs';
declare let L ;
import 'leaflet.markercluster';
import { Type } from 'src/app/shared/model/property';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild('carouselModalContent') carouselModalContent: any;
  constructor(private location: LocationService, private propertyService:PropertyService,private modalService: NgbModal) { }
  public listing = listing;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  //pagination :

  // pagination
  page: number = 1;
  count:number=0;
  tableSize:number=6;


  pageSize:number=6;

  public mapdata = mapdata;

  public icon = {
    icon: L.icon({
      iconSize: [50,50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
      iconUrl: 'assets/img/misc/marker.png'
    })
  };

  ads:advertisement[];

  private map: any;
  private markers = L.markerClusterGroup();
  ngOnInit() {
    this.map = L.map('map', {
      style: 'mapbox://styles/mapbox/light-v10',
      center: [36.806389, 10.181667],
      zoom: 11.5,
      pitch: 45,
      container: 'map',
      antialias: true
    });

    
    //var marker;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    /*
    for (let i = 0; i < this.mapdata.length - 1; i++) {
      marker = L.marker(this.mapdata[i].geometry.coordinates, this.icon).addTo(map);
      marker.bindPopup('<div class="mapboxgl-popup mapboxgl-popup-anchor-top"><div class="mapboxgl-popup-tip"></div><img src="' + this.mapdata[i].properties.thumbnail + '" alt="' + this.mapdata[i].properties.title + '"/> ' +
        '<div class="acr-listing-popup-body"><h5><a href="#" title="' + this.mapdata[i].properties.title + '">' + this.mapdata[i].properties.title + '</a></h5> <span class="listing-price">' + this.mapdata[i].properties.price + '</span>' +
        '<p><i class="fas fa-map-signs"></i> ' + this.mapdata[i].properties.description + '</p> <div class="location-popup-meta"> <span><i class="fas fa-bed"></i>' + this.mapdata[i].properties.bed + '</span>' +
        '<span><i class="fas fa-bath"></i>' + this.mapdata[i].properties.bath + '</span><span><i class="fas fa-ruler-combined"></i>' + this.mapdata[i].properties.size + '</span> </div></div> </div>');
    }*/


    // MAP
/*
   this.propertyService.recentListings().subscribe((res: advertisement[]) => {
    this.ads = res;

    const coordinatesRequests = this.ads.map(ad => {
      return this.location.getCityCoordinates(ad.property.ville);
    });

    forkJoin(coordinatesRequests).subscribe((responses: any[]) => {
      responses.forEach((response, index) => {
        if (response.results && response.results.length > 0) {
          const location = response.results[0].geometry;
          this.ads[index]['latitude'] = location.lat;
          this.ads[index]['longitude'] = location.lng;
        } else {
          // Handle cases where coordinates are not found for a city
          this.ads[index]['latitude'] = null;
          this.ads[index]['longitude'] = null;
        }
      });

      console.log(this.ads, 'all listings by recent with coordinates');
    }, (error) => {
      console.error(error);
    });
  }, (error) => {
    console.error(error);
  });*/

  // map visualisation 
  /*
  this.propertyService.recentListings().subscribe((res:advertisement[])=>{
    this.ads = res;
    console.log(this.ads, 'ads');

    for (let i = 0; i < this.ads.length; i++) {
      const ad = this.ads[i];
      const city = ad.property.ville;
  
      this.location.getCityCoordinates(city).subscribe((response: any) => {
        if (response.results && response.results.length > 0) {
          const location = response.results[0].geometry;
          const latitude = location.lat;
          const longitude = location.lng;
          console.log(latitude, longitude , 'ads location');
          const marker = L.marker([latitude, longitude], this.icon).addTo(map);
          marker.bindPopup('<div class="mapboxgl-popup mapboxgl-popup-anchor-top"><div class="mapboxgl-popup-tip"></div><img src="' + ad.property.photo[0] + '" alt="' + ad.title + '"/> ' +
            '<div class="acr-listing-popup-body"><h5><a href="/listing-details-v1/' + ad.id + '" title="' + ad.title + '">' + ad.title + '</a></h5> <span class="listing-price">' + ad.price + '</span>' +
            '<p><i class="fas fa-map-signs"></i> ' + (ad.description?.length > 101 ? ad.description.slice(0, 101) + '...' : ad.description) +  '</p> <div class="location-popup-meta"> <span><i class="fas fa-home"></i>' + ad.property.rooms + '</span>' +
            '<span><i class="fas fa-map-marker-alt"></i>' + ad.property.ville + '</span><span><i class="fas fa-ruler-combined"></i>' + ad.property.size + '</span> </div></div> </div>');
        }
        
      });


    }

  

  }); */


  //map : 

  
  /*//working but without marker cluster
  this.propertyService.recentListings().subscribe((res: advertisement[]) => {
    this.ads = res;
    console.log(this.ads, 'ads');
  
    const coordinatesRequests = this.ads.map(ad => {
      const city = ad.property.ville;
      return this.location.getCityCoordinates(city);
    });
  
    combineLatest(coordinatesRequests).subscribe((responses: any[]) => {
      responses.forEach((response, index) => {
        const ad = this.ads[index];
        if (response.results && response.results.length > 0) {
          const location = response.results[0].geometry;
          const latitude = location.lat;
          const longitude = location.lng;
          console.log(latitude, longitude, 'ads location');
          const marker = L.marker([latitude, longitude], this.icon).addTo(map);
          marker.bindPopup('<div class="mapboxgl-popup mapboxgl-popup-anchor-top"><div class="mapboxgl-popup-tip"></div><img src="' + ad.property.photo[0] + '" alt="' + ad.title + '"/> ' +
            '<div class="acr-listing-popup-body"><h5><a href="#" title="' + ad.title + '">' + ad.title + '</a></h5> <span class="listing-price">' + ad.price + '</span>' +
            '<p><i class="fas fa-map-signs"></i> ' + ad.description + '</p> <div class="location-popup-meta"> <span><i class="fas fa-home"></i>' + ad.property.rooms + '</span>' +
            '<span><i class="fas fa-map-marker-alt"></i>' + ad.property.ville + '</span><span><i class="fas fa-ruler-combined"></i>' + ad.property.size + '</span> </div></div> </div>');
        }
      });
    }, (error) => {
      console.error(error);
    });
  }); */

 // markerClusterGroup: 
  //const markers = L.markerClusterGroup();
  this.propertyService.recentListings().subscribe((res: advertisement[]) => {
    this.ads = res;
    console.log(this.ads, 'ads');

    const coordinatesRequests = this.ads.map(ad => {
      const city = ad.property.ville;
      const region=ad.property.region;
      return this.location.getCityCoordinates(city,region);
    });

    combineLatest(coordinatesRequests).subscribe((responses: any[]) => {
      responses.forEach((response, index) => {
        const ad = this.ads[index];
        if (response.results && response.results.length > 0) {
          const location = response.results[0].geometry;
          const latitude = location.lat;
          const longitude = location.lng;
          console.log(latitude, longitude, 'ads location');
          const marker = L.marker([latitude, longitude], this.icon);
          this.markers.addLayer(marker); 
          marker.bindPopup('<div class="mapboxgl-popup mapboxgl-popup-anchor-top"><div class="mapboxgl-popup-tip"></div><img src="' + ad.property.photo[0] + '" alt="' + ad.title + '"/> ' +
            '<div class="acr-listing-popup-body"><h5><a href="/listing-details-v1/' + ad.id + '" title="' + ad.title + '">' + ad.title + '</a></h5> <span class="listing-price">' + ad.price +' $'+ '</span>' +
            '<p><i class="fas fa-map-signs"></i> ' + (ad.description ? (ad.description.length > 50 ? ad.description.slice(0, 50) + '...' : ad.description) : '') + '</p> <div class="location-popup-meta"> <span><i class="fas fa-home"></i>' + ad.property.rooms + '</span>' +
            '<span><i class="fas fa-map-marker-alt"></i>' + ad.property.ville + '</span><span><i class="fas fa-ruler-combined"></i>' + ad.property.size + '</span> </div></div> </div>');
        }
    });

      this.map.addLayer(this.markers);
    }, (error) => {
      console.error(error);
    });
  });
  

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
    "Tunis",
    "Ariana",
    "Sousse",
    "Bizerte",
    "Manouba",
    "Ben Arous",
    "Zaghouan",
    "Nabeul",
    "Jendouba",
    "Béja",
    "Kef",
    "Siliana",
    "Sousse",
    "Monastir",
    "Mahdia",
    " Kairouan",
    "Kasserine",
    "Sidi Bouzid",
    " Sfax",
    "Gabès",
    "Médenine",
    "Tataouine",
    "Gafsa",
    "Tozeur",
    "Kébili"
  ];
  "statuslist": string[] = ['Any Status', ...Object.values(TypeAd)];

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
  "typelist": string[] = ['Any Type', ...Object.values(Type)];

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

  "features":string[]=["Any feature","parking","garage"];



  //search
  //params 
  loc?:string;
  status?:string;
  type?:string;
  rooms?:string;
  garage?:boolean;
  ville?: string;
  parking?: boolean;
  maxPrice?: string;
  minPrice?: string;
  minSize?: string;
  maxSize?: string;
  feature?:string;

  result?:advertisement[];
  private searchMarkers = L.markerClusterGroup();
  search(){
    this.markers.clearLayers();
    this.searchMarkers.clearLayers();
    console.log(this.loc,' : location');
    console.log(this.status,'status');
    console.log(this.type,'type');
    console.log(Number(this.rooms),'rooms');
    console.log(Number(this.minPrice), 'minPrice');
    console.log(Number(this.maxPrice),'MaxPrice');
    console.log(Number(this.maxSize),' MaxSize');
    console.log(Number(this.maxSize),' minSize');
    console.log(this.feature , 'feature');
    if(this.feature==="parking"){this.parking=true};
    if(this.feature==="garage"){this.garage=true};

    this.propertyService.searchNotScrapedAds(this.status, this.type, this.loc, this.ville,Number(this.rooms),
    this.parking, this.garage, Number(this.maxPrice), Number(this.minPrice),
    Number(this.minSize),Number( this.maxSize)).subscribe((res:advertisement[])=>{
      this.result=res;
      console.log(this.result, 'result search from map');

      const coordinatesRequests = this.result.map(ad => {
        const city = ad.property.ville;
        const region=ad.property.region;
        return this.location.getCityCoordinates(city,region);
      });

      combineLatest(coordinatesRequests).subscribe((responses: any[]) => {
        responses.forEach((response, index) => {
          const ad = this.result[index];
          if (response.results && response.results.length > 0) {
            const location = response.results[0].geometry;
            const latitude = location.lat;
            const longitude = location.lng;
            console.log(latitude, longitude, 'ads location');
            const marker = L.marker([latitude, longitude], this.icon);
            this.searchMarkers.addLayer(marker);

            // ... Marker popup content setup ...

           marker.bindPopup('<div class="mapboxgl-popup mapboxgl-popup-anchor-top"><div class="mapboxgl-popup-tip"></div><img src="' + ad.property.photo[0] + '" alt="' + ad.title + '"/> ' +
            '<div class="acr-listing-popup-body"><h5><a href="/listing-details-v1/' + ad.id + '" title="' + ad.title + '">' + ad.title + '</a></h5> <span class="listing-price">' + ad.price + ' $' + '</span>' +
            '<p><i class="fas fa-map-signs"></i> ' + (ad.description ? (ad.description.length > 50 ? ad.description.slice(0, 50) + '...' : ad.description) : '') + '</p> <div class="location-popup-meta"> <span><i class="fas fa-home"></i>' + ad.property.rooms + '</span>' +
            '<span><i class="fas fa-map-marker-alt"></i>' + ad.property.ville + '</span><span><i class="fas fa-ruler-combined"></i>' + ad.property.size + '</span> </div></div> </div>');
        }
        });
        // Add the search markers to the map
        this.map.addLayer(this.searchMarkers);
      });
    });

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
