import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyarchiveComponent } from './agencyarchive.component';

const routes: Routes = [{ path: '', component: AgencyarchiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyarchiveRoutingModule { }
