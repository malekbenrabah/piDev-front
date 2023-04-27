import { Component, OnInit } from '@angular/core';
import blog from '../../../data/blog.json'
import agents from '../../../data/agents.json';

@Component({
  selector: 'app-relatedpost',
  templateUrl: './relatedpost.component.html',
  styleUrls: ['./relatedpost.component.css']
})
export class RelatedpostComponent implements OnInit {

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
