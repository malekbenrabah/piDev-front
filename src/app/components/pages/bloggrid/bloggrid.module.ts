import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { HttpClientModule } from '@angular/common/http';

import { BloggridRoutingModule } from './bloggrid-routing.module';
import { BloggridComponent } from './bloggrid.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [BloggridComponent, ContentComponent],
  imports: [
    CommonModule,
    BloggridRoutingModule,
    SharedModule,
    NgMasonryGridModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class BloggridModule { }
