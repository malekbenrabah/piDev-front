import { Component, OnInit } from '@angular/core';
import navigation from '../../../data/navigation.json'

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent implements OnInit {

  constructor() { }
  public navigation = navigation;
  open: boolean = false;
  trigger(item: { open: boolean; }){
    item.open = !item.open;
  }

  ngOnInit(): void {
  }

}
