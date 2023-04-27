import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AgencyarchiveRoutingModule } from './agencyarchive-routing.module';
import { AgencyarchiveComponent } from './agencyarchive.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [AgencyarchiveComponent, ContentComponent],
  imports: [
    CommonModule,
    AgencyarchiveRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class AgencyarchiveModule { }
