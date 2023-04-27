import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homefour',
  templateUrl: './homefour.component.html',
  styleUrls: ['./homefour.component.css']
})
export class HomefourComponent implements OnInit {

  constructor() { }
  // Footer style
  classname = "footer-dark";
  ftlogo = "assets/img/logo-light.png"

  ngOnInit(): void {
  }

}
