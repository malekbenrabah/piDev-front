import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blog from '../../../../data/blog.json'
import blogcategory from '../../../../data/blogcategory.json'
import blogtags from '../../../../data/blogtags.json'
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {
  // pagination
  page: number = 1;
  constructor(private router: ActivatedRoute) { }

  public blog = blog;
  public agents = agents;
  public blogtags = blogtags;
  public blogcategory = blogcategory;

  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Category Filter
  public setCategory(id: any) {
    this.blogcategory = id;
  }
  public getCategory() {
    return this.blogcategory;
  }
  public getPostsByCategory(catId) {
    return this.blog.filter(item => { return item.categories.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.blogtags = id;
  }
  public getTag() {
    return this.blogtags;
  }
  public getPostsByTags(tagId) {
    return this.blog = blog.filter(item => { return item.tags.includes(parseInt(tagId)) });
  }
  // Author Filter
  public setAuthor(id: any) {
    this.agents = id;
  }
  public getAuthorPost() {
    return this.agents;
  }
  public getPostsByAuthors(authorId) {
    return this.blog = blog.filter(item => { return item.author.includes(parseInt(authorId)) });
  }
  // Fetch All filter
  public setPosts() {
    var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '',
      postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '',
      postsByAuthor = this.getAuthorPost() != undefined ? this.getPostsByAuthors(this.getAuthorPost()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.blog = postsByCategory;
    } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.blog = postsByTags;
    } else if ((postsByAuthor != '' || postsByAuthor != undefined || postsByAuthor != null) && postsByAuthor.length > 0) {
      this.blog = postsByAuthor;
    }
  }
  ngAfterContentInit(): void {
    this.setCategory(this.router.snapshot.params.catId);
    this.setTag(this.router.snapshot.params.tagId);
    this.setAuthor(this.router.snapshot.params.authorId);
    this.setPosts();
  }

}
