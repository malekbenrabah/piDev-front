import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    ($('.gallery-thumb') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
    });
  }

}
