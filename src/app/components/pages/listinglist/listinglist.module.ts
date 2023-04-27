import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListinglistRoutingModule } from './listinglist-routing.module';
import { ListinglistComponent } from './listinglist.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ListinglistComponent, ContentComponent],
  imports: [
    CommonModule,
    ListinglistRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class ListinglistModule { }
