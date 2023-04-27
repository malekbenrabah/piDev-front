import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingmapComponent } from './listingmap.component';

const routes: Routes = [{ path: '', component: ListingmapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingmapRoutingModule { }
