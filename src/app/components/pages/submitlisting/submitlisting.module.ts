import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { SubmitlistingRoutingModule } from './submitlisting-routing.module';
import { SubmitlistingComponent } from './submitlisting.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubmitlistingComponent, ContentComponent],
  imports: [
    CommonModule,
    SubmitlistingRoutingModule,
    SharedModule,
    NgbModule,
    NgxDropzoneModule,
    LeafletMarkerClusterModule,
    LeafletModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubmitlistingModule { }
