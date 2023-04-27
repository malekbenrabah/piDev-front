import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingdetailthreeComponent } from './listingdetailthree.component';

const routes: Routes = [{ path: '', component: ListingdetailthreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingdetailthreeRoutingModule { }
