import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerfive',
  templateUrl: './headerfive.component.html',
  styleUrls: ['./headerfive.component.css']
})
export class HeaderfiveComponent implements OnInit {

  constructor() { }
  // navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }

  ngOnInit(): void {
  }

}
