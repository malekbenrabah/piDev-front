import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingsoonComponent } from './comingsoon.component';

const routes: Routes = [{ path: '', component: ComingsoonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingsoonRoutingModule { }
