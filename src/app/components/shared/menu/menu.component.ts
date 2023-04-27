import { Component, OnInit } from '@angular/core';
import navigation from '../../../data/navigation.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  public navigation = navigation;

  ngOnInit(): void {
  }

}
