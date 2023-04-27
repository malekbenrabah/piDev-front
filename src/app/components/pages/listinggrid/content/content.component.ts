import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import listing from '../../../../data/listings.json';
import category from '../../../../data/category.json';
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  // pagination
  page: number = 1;
  public listing = listing;
  public agents = agents;
  public Singlecategory = category;
  public category = category;


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
  ngAfterContentInit(): void {
    this.setCategory(this.router.snapshot.params.catId);
    this.setPosts();
  }
  

}
