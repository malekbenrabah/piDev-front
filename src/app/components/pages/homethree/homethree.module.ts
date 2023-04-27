import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSelect2Module } from "ng-select2";

import { HomethreeRoutingModule } from './homethree-routing.module';
import { HomethreeComponent } from './homethree.component';

import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { WhyusComponent } from './whyus/whyus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LocationComponent } from './location/location.component';
import { RecentlistingComponent } from './recentlisting/recentlisting.component';
import { FindhomeComponent } from './findhome/findhome.component';
import { AgentsliderComponent } from './agentslider/agentslider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component'

@NgModule({
  declarations: [HomethreeComponent, BannerComponent, WhyusComponent, AboutusComponent, LocationComponent, RecentlistingComponent, FindhomeComponent, AgentsliderComponent, TestimonialsComponent, ClientsComponent],
  imports: [
    CommonModule,
    HomethreeRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    NgSelect2Module
  ]
})
export class HomethreeModule { }
