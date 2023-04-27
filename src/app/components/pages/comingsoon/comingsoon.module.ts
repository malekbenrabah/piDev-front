import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ComingsoonRoutingModule } from './comingsoon-routing.module';
import { ComingsoonComponent } from './comingsoon.component';

import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [ComingsoonComponent],
  imports: [
    CommonModule,
    ComingsoonRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule
  ]
})
export class ComingsoonModule { }
