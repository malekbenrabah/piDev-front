import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingdetailComponent } from './listingdetail.component';

const routes: Routes = [{ path: '', component: ListingdetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingdetailRoutingModule { }
