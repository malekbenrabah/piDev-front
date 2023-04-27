import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentdetailsComponent } from './agentdetails.component';

const routes: Routes = [{ path: '', component: AgentdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentdetailsRoutingModule { }
