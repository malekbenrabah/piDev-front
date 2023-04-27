import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AgencydetailsRoutingModule } from './agencydetails-routing.module';
import { AgencydetailsComponent } from './agencydetails.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [AgencydetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    AgencydetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class AgencydetailsModule { }
