import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  counter = [
    {
        icon: "garage",
        value: 24934,
        title: "Listings"
    },
    {
        icon: "sales-agent",
        value: 65317,
        title: "Agents"
    },
    {
        icon: "company",
        value: 4658,
        title: "Agencies"
    },
    {
        icon: "sold",
        value: 67335,
        title: "Listings Sold"
    }
]

  ngOnInit(): void {
  }

}
