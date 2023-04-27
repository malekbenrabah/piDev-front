import { Component, OnInit } from '@angular/core';
import contactinfo from '../../../../data/contactinfo.json';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  constructor() { }
  public contactinfo = contactinfo;

  ngOnInit(): void {
  }

}
