import { Component, OnInit } from '@angular/core';
import blog from '../../../../data/blog.json'

@Component({
  selector: 'app-latestblog',
  templateUrl: './latestblog.component.html',
  styleUrls: ['./latestblog.component.css']
})
export class LatestblogComponent implements OnInit {

  constructor() { }
  public blog = blog;

  ngOnInit(): void {
  }

}
