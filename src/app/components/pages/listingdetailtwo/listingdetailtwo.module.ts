import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ListingdetailtwoRoutingModule } from './listingdetailtwo-routing.module';
import { ListingdetailtwoComponent } from './listingdetailtwo.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ListingdetailtwoComponent, ContentComponent],
  imports: [
    CommonModule,
    ListingdetailtwoRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class ListingdetailtwoModule { }
