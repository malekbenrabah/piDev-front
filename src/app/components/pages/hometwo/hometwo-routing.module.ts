import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HometwoComponent } from './hometwo.component';

const routes: Routes = [{ path: '', component: HometwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HometwoRoutingModule { }
