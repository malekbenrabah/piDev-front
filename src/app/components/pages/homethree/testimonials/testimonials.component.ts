import { Component, OnInit } from '@angular/core';
import testimonial from '../../../../data/testimonial.json';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }
  public testimonial = testimonial;

  ngOnInit(): void {
  }

}
