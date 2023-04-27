import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparelistingComponent } from './comparelisting.component';

const routes: Routes = [{ path: '', component: ComparelistingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparelistingRoutingModule { }
