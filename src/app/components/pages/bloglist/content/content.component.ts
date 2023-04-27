import { Component, OnInit } from '@angular/core';
import blog from '../../../../data/blog.json'
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // pagination
  page: number = 1;
  constructor() { }
  public blog = blog;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
  }

}
