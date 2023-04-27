import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ListingdetailthreeRoutingModule } from './listingdetailthree-routing.module';
import { ListingdetailthreeComponent } from './listingdetailthree.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ListingdetailthreeComponent, ContentComponent],
  imports: [
    CommonModule,
    ListingdetailthreeRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class ListingdetailthreeModule { }
