import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggridComponent } from './bloggrid.component';

const routes: Routes = [{ path: '', component: BloggridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloggridRoutingModule { }
