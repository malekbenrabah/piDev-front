import { Component, OnInit } from '@angular/core';
import mapdata from '../../../../data/mapdata.json';
import 'leaflet';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { PropertiesService } from 'src/app/shared/properties/properties.service';
import { TypeAd, advertisement } from 'src/app/shared/model/advertisement';
import { Type } from 'src/app/shared/model/property';
declare let L;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private propService:PropertyService, private propertiesService:PropertiesService) { }

  public mapdata = mapdata;
  public icon = {
    icon: L.icon({
      iconSize: [50, 50],
      iconAnchor: [22, 41],
      popupAnchor: [2, -40],
      iconUrl: 'assets/img/misc/marker.png'
    })
  };
  listing:advertisement[];
 
  
  typeAds=Object.values(TypeAd);

  
  types = Object.values(Type);
  //preparing data : 
  nameA:string;
  selectedTypeAd:TypeAd;
  selectedType: Type;
  price:number;
  content:any;
  sqrft:any;



 


  ngOnInit() {
    localStorage.setItem('token', 'token-ee');
    

    this.propertiesService.getProperties().subscribe((data: advertisement[]) => {
      this.listing = data;
      console.log(this.listing);
    });


    const map = L.map('leafletmap', {
      style: 'mapbox://styles/mapbox/light-v10',
      center: [38.907, -77.04],
      zoom: 11.5,
      pitch: 45,
      antialias: true
    });
    var marker;
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (let i = 0; i < this.mapdata.length - 1; i++) {
      marker = L.marker([38.907, -77.04], this.icon).addTo(map);
      marker.bindPopup('<div class="mapboxgl-popup mapboxgl-popup-anchor-top"><div class="mapboxgl-popup-tip"></div><img src="' + this.mapdata[i].properties.thumbnail + '" alt="' + this.mapdata[i].properties.title + '"/> ' +
        '<div class="acr-listing-popup-body"><h5><a href="#" title="' + this.mapdata[i].properties.title + '">' + this.mapdata[i].properties.title + '</a></h5> <span class="listing-price">' + this.mapdata[i].properties.price + '</span>' +
        '<p><i class="fas fa-map-signs"></i> ' + this.mapdata[i].properties.description + '</p> <div class="location-popup-meta"> <span><i class="fas fa-bed"></i>' + this.mapdata[i].properties.bed + '</span>' +
        '<span><i class="fas fa-bath"></i>' + this.mapdata[i].properties.bath + '</span><span><i class="fas fa-ruler-combined"></i>' + this.mapdata[i].properties.size + '</span> </div></div> </div>');
    }
  }


  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
    console.log("selected files"+this.files.map(file => file.name));
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }

  features = [
    { id: 1, icon: 'bone', title: 'Pet Friendly' },
    { id: 2, icon: 'chair', title: 'Furnished' },
    { id: 3, icon: 'fan', title: 'Cooling' },
    { id: 4, icon: 'garage', title: 'Parking' },
    { id: 5, icon: 'mailbox', title: 'Mailbox' },
    { id: 6, icon: 'eye', title: 'City View' },
  ];
  

}
