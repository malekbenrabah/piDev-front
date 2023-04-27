import { Component, OnInit } from '@angular/core';
import listing from '../../../data/listings.json';
import agents from '../../../data/agents.json';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { advertisement } from 'src/app/shared/model/advertisement';

@Component({
  selector: 'app-similarlisting',
  templateUrl: './similarlisting.component.html',
  styleUrls: ['./similarlisting.component.css']
})
export class SimilarlistingComponent implements OnInit {

  constructor(private router: ActivatedRoute, private propertyService:PropertyService) { }
  //public listing = listing;

  
 public list:advertisement[];

  ngOnInit(): void {
    this.propertyService.getSimilarAds(Number(this.router.snapshot.params.id)).subscribe((data:advertisement[])=>{
      this.list=data;
      console.log("id : "+Number(this.router.snapshot.params.id))
      console.log("similar ads : "+JSON.stringify(this.list));
    })
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


  // agents
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

}
