import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSelect2Module } from "ng-select2";
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { HomefiveRoutingModule } from './homefive-routing.module';
import { HomefiveComponent } from './homefive.component';

import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListingsComponent } from './listings/listings.component';
import { ServicesComponent } from './services/services.component';
import { BlogblockComponent } from './blogblock/blogblock.component';
import { ContactformComponent } from './contactform/contactform.component'

@NgModule({
  declarations: [HomefiveComponent, BannerComponent, AboutusComponent, CategoriesComponent, ListingsComponent, ServicesComponent, BlogblockComponent, ContactformComponent],
  imports: [
    CommonModule,
    HomefiveRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    NgSelect2Module,
    LeafletMarkerClusterModule,
    LeafletModule
  ]
})
export class HomefiveModule { }
