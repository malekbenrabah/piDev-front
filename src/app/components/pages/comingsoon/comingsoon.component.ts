import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {

  constructor() { }
  images = [
    { img: 'assets/img/coming-soon/1.jpg' },
    { img: 'assets/img/coming-soon/2.jpg' },
    { img: 'assets/img/coming-soon/3.jpg' },
  ];
  // Settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    dotsClass: "d-flex slick-dots",
  }

  ngOnInit(): void {
  }

}
