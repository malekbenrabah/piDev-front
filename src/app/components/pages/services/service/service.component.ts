import { Component, OnInit } from '@angular/core';
import serviceblock from '../../../../data/services.json';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  public serviceblock = serviceblock;

  ngOnInit(): void {
  }

}
