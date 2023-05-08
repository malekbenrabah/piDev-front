import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfilelistingRoutingModule } from './profilelisting-routing.module';
import { ProfilelistingComponent } from './profilelisting.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfilelistingComponent, ContentComponent],
  imports: [
    CommonModule,
    ProfilelistingRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    NgbProgressbarModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ProfilelistingModule { }
