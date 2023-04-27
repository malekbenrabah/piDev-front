import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footertwo',
  templateUrl: './footertwo.component.html',
  styleUrls: ['./footertwo.component.css']
})
export class FootertwoComponent implements OnInit {

  constructor() { }
  @Input()  layout: number | string;
  @Input()  logo: number | string;

  ngOnInit(): void {
  }

}
