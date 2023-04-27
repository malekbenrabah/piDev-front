import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ListingdetailRoutingModule } from './listingdetail-routing.module';
import { ListingdetailComponent } from './listingdetail.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ListingdetailComponent, ContentComponent],
  imports: [
    CommonModule,
    ListingdetailRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class ListingdetailModule { }
