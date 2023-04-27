import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import agents from '../../../../data/agents.json';
import listings from '../../../../data/listings.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public agentsdetails = agents;
  public listings = listings;
  public setListing(id: any) {
    this.agentsdetails = agents.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setListing(this.router.snapshot.params.id);
  }

}
