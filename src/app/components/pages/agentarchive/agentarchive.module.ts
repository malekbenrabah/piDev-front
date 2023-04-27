import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AgentarchiveRoutingModule } from './agentarchive-routing.module';
import { AgentarchiveComponent } from './agentarchive.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [AgentarchiveComponent, ContentComponent],
  imports: [
    CommonModule,
    AgentarchiveRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class AgentarchiveModule { }
