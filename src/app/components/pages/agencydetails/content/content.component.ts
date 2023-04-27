import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import agency from '../../../../data/agency.json';
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
  public listings = listings;
  public agencydetails = agency;
  public setListing(id: any) {
    this.agencydetails = agency.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setListing(this.router.snapshot.params.id);
  }

}
