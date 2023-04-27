import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefiveComponent } from './homefive.component';

const routes: Routes = [{ path: '', component: HomefiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomefiveRoutingModule { }
