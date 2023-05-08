import { Component, OnInit } from '@angular/core';
import { advertisement } from 'src/app/shared/model/advertisement';
import { PropertyService } from 'src/app/shared/properties/property.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private propertyService:PropertyService) { }
  bannerpost = [
    {
      id: 1,
      img: 'assets/img/banner/1.jpg',
      price: 852000,
      emitime: 60,
      location: 'Iris Watson, Frederick Nebraska 20620',
      beds: 3,
      baths: 2,
      area: 2499,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      type: 'House',
      view: 'City View',
      size: '89 Acres',
      condition: 'Brand New'
    },
    {
      id: 2,
      img: 'assets/img/banner/2.jpg',
      price: 1200000,
      emitime: 60,
      location: 'Theodore Lowe, Azusa New York 39531',
      beds: 4,
      baths: 3,
      area: 3120,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      type: 'Duplex',
      view: 'Forest View',
      size: '180 Acres',
      condition: 'Brand New'
    },
  ];
  // Settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    prevArrow: '.banner .slider-prev',
    nextArrow: '.banner .slider-next',
  }

  listing:advertisement[];
  ngOnInit(): void {
    this.propertyService.recentListings().subscribe((res:advertisement[])=>{
      this.listing=res,
      console.log(this.listing,'recent listings');
    });
  }

}
