import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencydetailsComponent } from './agencydetails.component';

const routes: Routes = [{ path: '', component: AgencydetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencydetailsRoutingModule { }
