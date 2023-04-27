import { Component, OnInit } from '@angular/core';
import category from '../../../../data/category.json'
import listings from '../../../../data/listings.json'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  public category = category;
  public listings = listings;

  public setCategoriesCount(){

    for(var i = 0; i < this.category.length; i++){
      var count = this.listings.filter( post => { return post.categories.includes( parseInt( this.category[i].id ) ) } );
      count = count.length;
      this.category[i].numberofitem = count;
    }
    
  }

  ngOnInit(): void {
    this.setCategoriesCount();
  }

}
