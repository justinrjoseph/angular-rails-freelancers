import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProposalsRoutingModule } from './proposals-routing.module';

import { ProposalsComponent } from './components/proposals/proposals.component';
import { NewProposalComponent } from './components/new-proposal/new-proposal.component';
import { ProposalComponent } from './components/proposal/proposal.component';

import { ProposalService } from './services/proposal.service';

@NgModule({
  imports: [
    CommonModule,
    ProposalsRoutingModule,
    FormsModule
  ],
  declarations: [
    ProposalsComponent,
    NewProposalComponent,
    ProposalComponent
  ],
  providers: [ProposalService]
})
export class ProposalsModule { }
