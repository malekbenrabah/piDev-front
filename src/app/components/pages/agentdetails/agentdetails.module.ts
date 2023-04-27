import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AgentdetailsRoutingModule } from './agentdetails-routing.module';
import { AgentdetailsComponent } from './agentdetails.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [AgentdetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    AgentdetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class AgentdetailsModule { }
