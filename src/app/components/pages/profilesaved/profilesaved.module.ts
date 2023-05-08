import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesavedRoutingModule } from './profilesaved-routing.module';
import { ProfilesavedComponent } from './profilesaved.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfilesavedComponent, ContentComponent],
  imports: [
    CommonModule,
    ProfilesavedRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgbProgressbarModule,
    NgxDropzoneModule,
    NgbModule,
    FormsModule
  ]
})
export class ProfilesavedModule { }
