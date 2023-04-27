import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingdetailtwoComponent } from './listingdetailtwo.component';

const routes: Routes = [{ path: '', component: ListingdetailtwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingdetailtwoRoutingModule { }
