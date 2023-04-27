import { Component, OnInit } from '@angular/core';
import contactinfo from '../../../../data/contactinfo.json';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {

  constructor() { }
  public contactinfo = contactinfo;

  ngOnInit(): void {
  }

}
