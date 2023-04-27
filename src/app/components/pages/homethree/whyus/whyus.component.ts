import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  whyusblock = [
    {
      id: 1,
      icon: "star",
      title: "We Are Featured",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 2,
      icon: "apartment",
      title: "Unlimited Listings",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 3,
      icon: "sales-agent",
      title: "Great Support",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ]

  ngOnInit(): void {
  }

}
