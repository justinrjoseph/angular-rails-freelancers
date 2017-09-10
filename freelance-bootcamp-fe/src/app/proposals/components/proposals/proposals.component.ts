import { Component, OnInit, OnDestroy } from '@angular/core';

import { Proposal } from '../../models/proposal';

import { ProposalService } from '../../services/proposal.service';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit, OnDestroy {
  proposals: Proposal[];
  errorMessage: string;
  subscription: Subscription;
  
  constructor(
    private _service: ProposalService,
    private _router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);

    this.subscription = timer.subscribe(() => this.getProposals());
  }
  
  getProposals() {
    this._service.getAll()
      .subscribe(
        (proposals: Proposal[]) => this.proposals = proposals,
        (error) => this.errorMessage = error
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToProposal(proposal: Proposal) {
    this._router.navigate(['/proposals', proposal.id]);
  }
}
