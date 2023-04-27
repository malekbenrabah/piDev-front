import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsingleComponent } from './blogsingle.component';

const routes: Routes = [{ path: '', component: BlogsingleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsingleRoutingModule { }
