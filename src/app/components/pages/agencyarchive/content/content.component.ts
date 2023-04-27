import { Component, OnInit } from '@angular/core';
import agency from '../../../../data/agency.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public agency = agency;

  ngOnInit(): void {
  }

}
