import { Component, AfterContentInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import listing from '../../../../data/listings.json';
import category from '../../../../data/category.json';
import agents from '../../../../data/agents.json';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { advertisement } from 'src/app/shared/model/advertisement';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit, OnInit {

  constructor(private router: ActivatedRoute, private propService:PropertyService) { }
  // pagination
  page: number = 1;
  public listing = listing;
  public agents = agents;
  public Singlecategory = category;
  public category = category;
  public ads:advertisement[];
 
  ngOnInit(): void {
    console.log(this.router.snapshot.params.type);
    this.propService.getAdsByType(this.router.snapshot.params.type).subscribe(advertisements => {this.ads = advertisements; console.log("tests :: "+JSON.stringify(this.ads))});

    this.setCategory(this.router.snapshot.params.catId);
    this.setPosts();
  }
  
  ngAfterContentInit(): void {

    
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


  //aaa


  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  // Category Filter
  public setCategory(id: any) {
    this.category = id;
  }
  public getCategory() {
    return this.category;
  }
  public getPostsByCategory(catId) {
    return this.listing.filter(item => { return item.categories.includes(parseInt(catId)) });
  }

  // Fetch All filter
  public setPosts() {
  var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '';

  if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
    this.listing = postsByCategory;
  }
}
}
