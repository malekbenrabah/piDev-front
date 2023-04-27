import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListinggridComponent } from './listinggrid.component';

const routes: Routes = [{ path: '', component: ListinggridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListinggridRoutingModule { }
