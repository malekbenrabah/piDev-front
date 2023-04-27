import { Component, OnInit } from '@angular/core';
import blog from '../../../data/blog.json'
import blogcategory from '../../../data/blogcategory.json'
import blogtags from '../../../data/blogtags.json'

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
})
export class BlogsidebarComponent implements OnInit {

  constructor() { }
  public blog = blog;
  public blogcategory = blogcategory;
  public blogtags = blogtags;

  public setCategoriesCount(){

    for(var i = 0; i < this.blogcategory.length; i++){
      var count = this.blog.filter( post => { return post.categories.includes( parseInt( this.blogcategory[i].id ) ) } );
      count = count.length;
      this.blogcategory[i].count = count;
    }
    
  }

  ngOnInit(): void {
    this.setCategoriesCount();
  }

}


