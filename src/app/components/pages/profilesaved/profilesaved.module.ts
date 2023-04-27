import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesavedRoutingModule } from './profilesaved-routing.module';
import { ProfilesavedComponent } from './profilesaved.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ProfilesavedComponent, ContentComponent],
  imports: [
    CommonModule,
    ProfilesavedRoutingModule,
    SharedModule
  ]
})
export class ProfilesavedModule { }
