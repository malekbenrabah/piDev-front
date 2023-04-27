import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitlistingComponent } from './submitlisting.component';

const routes: Routes = [{ path: '', component: SubmitlistingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitlistingRoutingModule { }
