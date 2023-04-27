import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe'
    });
  }

}
