import { Component, OnInit } from '@angular/core';

import category from '../../../../data/category.json';
import agents from '../../../../data/agents.json';
import { PropertiesService } from 'src/app/shared/properties/properties.service';
import { advertisement } from 'src/app/shared/model/advertisement';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private propService:PropertiesService) { }

  // pagination
  page: number = 1;
  count:number=0;
  tableSize:number=6;


  pageSize:number=6;
  //public listing = listing;
  public listing:advertisement[];
  public category = category;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
    this.propService.getProperties().subscribe(res=>{console.log(res); this.listing=res});
    
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
  }
  
  pagedListing() {
    let pages = [];
    for (let i = 0; i < this.listing.length; i += this.pageSize) {
      let page = this.listing.slice(i, i + this.pageSize);
      pages.push(page);
    }
    return pages;
  }

}
