import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { SharedModule } from '../../shared/shared.module';
import { AbouttextComponent } from './abouttext/abouttext.component';
import { CounterComponent } from './counter/counter.component';
import { AgentsliderComponent } from './agentslider/agentslider.component';
import { VideoComponent } from './video/video.component';
import { TestimonialsComponent } from './testimonials/testimonials.component'

@NgModule({
  declarations: [AboutComponent, AbouttextComponent, CounterComponent, AgentsliderComponent, VideoComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule
  ]
})
export class AboutModule { }
