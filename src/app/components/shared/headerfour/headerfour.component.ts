import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerfour',
  templateUrl: './headerfour.component.html',
  styleUrls: ['./headerfour.component.css']
})
export class HeaderfourComponent implements OnInit {

  constructor() { }
  // navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }

  ngOnInit(): void {
  }

}
