import { Component, OnInit } from '@angular/core';
import mapdata from '../../../../data/mapdata.json';
import 'leaflet';
declare let L;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

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

}
