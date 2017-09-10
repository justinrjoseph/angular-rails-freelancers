import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProposalsComponent } from './components/proposals/proposals.component';
import { NewProposalComponent } from './components/new-proposal/new-proposal.component';
import { ProposalComponent } from './components/proposal/proposal.component';

const routes: Routes = [
  { path: 'proposals', children: [
    { path: '', component: ProposalsComponent},
    { path: 'new', component: NewProposalComponent },
    { path: ':id', component: ProposalComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalsRoutingModule {}