import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilelistingComponent } from './profilelisting.component';

const routes: Routes = [{ path: '', component: ProfilelistingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilelistingRoutingModule { }
