import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparelistingRoutingModule } from './comparelisting-routing.module';
import { ComparelistingComponent } from './comparelisting.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ComparelistingComponent, ContentComponent],
  imports: [
    CommonModule,
    ComparelistingRoutingModule,
    SharedModule
  ]
})
export class ComparelistingModule { }
