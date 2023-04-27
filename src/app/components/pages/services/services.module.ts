import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

import { SharedModule } from '../../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComponent } from './service/service.component'

@NgModule({
  declarations: [ServicesComponent, InfoComponent, GalleryComponent, ServiceComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
