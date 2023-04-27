import { Component, OnInit } from '@angular/core';
import blog from '../../../../data/blog.json'
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-blogblock',
  templateUrl: './blogblock.component.html',
  styleUrls: ['./blogblock.component.css']
})
export class BlogblockComponent implements OnInit {

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
