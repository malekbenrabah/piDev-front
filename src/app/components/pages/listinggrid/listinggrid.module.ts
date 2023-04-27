import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ListinggridRoutingModule } from './listinggrid-routing.module';
import { ListinggridComponent } from './listinggrid.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'


@NgModule({
  declarations: [ListinggridComponent, ContentComponent],
  imports: [
    CommonModule,
    ListinggridRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgbModule,
    HttpClientModule,
    
  ]
})
export class ListinggridModule { }
