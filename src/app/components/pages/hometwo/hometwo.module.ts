import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSelect2Module } from "ng-select2";

import { HometwoRoutingModule } from './hometwo-routing.module';
import { HometwoComponent } from './hometwo.component';

import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListingsComponent } from './listings/listings.component';
import { ServicesComponent } from './services/services.component';
import { BlogblockComponent } from './blogblock/blogblock.component';
import { ContactformComponent } from './contactform/contactform.component'

@NgModule({
  declarations: [HometwoComponent, BannerComponent, AboutComponent, CategoriesComponent, ListingsComponent, ServicesComponent, BlogblockComponent, ContactformComponent],
  imports: [
    CommonModule,
    HometwoRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    NgSelect2Module
  ]
})
export class HometwoModule { }
