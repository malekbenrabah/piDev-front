import { Component, OnInit } from '@angular/core';
import contactinfo from '../../../../data/contactinfo.json';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }
  public contactinfo = contactinfo;

  ngOnInit(): void {
  }

}
