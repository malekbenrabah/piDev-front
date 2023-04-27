import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSelect2Module } from "ng-select2";

import { HomefourRoutingModule } from './homefour-routing.module';
import { HomefourComponent } from './homefour.component';

import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecentlistingsComponent } from './recentlistings/recentlistings.component';
import { LatestblogComponent } from './latestblog/latestblog.component';
import { FaqsComponent } from './faqs/faqs.component'

@NgModule({
  declarations: [HomefourComponent, BannerComponent, CategoriesComponent, RecentlistingsComponent, LatestblogComponent, FaqsComponent],
  imports: [
    CommonModule,
    HomefourRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    NgSelect2Module
  ]
})
export class HomefourModule { }
