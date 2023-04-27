import { Component, OnInit } from '@angular/core';
import agent from '../../../../data/agents.json'

@Component({
  selector: 'app-agentslider',
  templateUrl: './agentslider.component.html',
  styleUrls: ['./agentslider.component.css']
})
export class AgentsliderComponent implements OnInit {

  constructor() { }
  public agent = agent;
  // Settings
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.agents .slider-prev',
    nextArrow: '.agents .slider-next',
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
