import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListinglistComponent } from './listinglist.component';

const routes: Routes = [{ path: '', component: ListinglistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListinglistRoutingModule { }
