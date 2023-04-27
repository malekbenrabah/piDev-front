import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesavedComponent } from './profilesaved.component';

const routes: Routes = [{ path: '', component: ProfilesavedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesavedRoutingModule { }
