import { Component, OnInit } from '@angular/core';
import category from '../../../../data/category.json'

@Component({
  selector: 'app-findhome',
  templateUrl: './findhome.component.html',
  styleUrls: ['./findhome.component.css']
})
export class FindhomeComponent implements OnInit {

  constructor() { }
  public category = category;

  ngOnInit(): void {
  }

}
