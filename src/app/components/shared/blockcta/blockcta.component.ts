import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockcta',
  templateUrl: './blockcta.component.html',
  styleUrls: ['./blockcta.component.css']
})
export class BlockctaComponent implements OnInit {

  constructor() { }
  ctablock = [
    {
      id: 1,
      icon: 'sales-agent',
      title: 'Buying a Home?',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    },
    {
      id: 2,
      icon: 'sold',
      title: 'Selling a Home?',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    }
  ]

  ngOnInit(): void {
  }

}
