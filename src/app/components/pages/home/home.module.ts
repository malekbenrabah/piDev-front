import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListingsliderComponent } from './listingslider/listingslider.component';
import { ToplistingComponent } from './toplisting/toplisting.component';
import { SingleagentComponent } from './singleagent/singleagent.component';
import { AgentsliderComponent } from './agentslider/agentslider.component';
import { LatestblogComponent } from './latestblog/latestblog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, CategoriesComponent, ListingsliderComponent, ToplistingComponent, SingleagentComponent, AgentsliderComponent, LatestblogComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule
  ]
})
export class HomeModule { }
