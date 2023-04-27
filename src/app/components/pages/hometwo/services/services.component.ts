import { Component, OnInit } from '@angular/core';
import serviceblock from '../../../../data/services.json';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  public serviceblock = serviceblock;

  ngOnInit(): void {
  }

}
