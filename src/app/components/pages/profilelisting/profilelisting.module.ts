import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfilelistingRoutingModule } from './profilelisting-routing.module';
import { ProfilelistingComponent } from './profilelisting.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ProfilelistingComponent, ContentComponent],
  imports: [
    CommonModule,
    ProfilelistingRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ProfilelistingModule { }
