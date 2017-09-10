import { Component, OnInit } from '@angular/core';

import { Proposal } from '../../models/proposal';

import { ActivatedRoute, Params } from '@angular/router';
import { ProposalService } from '../../services/proposal.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  proposal: Proposal;

  constructor(
    private _route: ActivatedRoute,
    private _service: ProposalService
  ) { }

  ngOnInit() {
    this._route.params
      .switchMap((params: Params) => {
        return this._service.getProposal(+params.id);
      })
      .subscribe((proposal: Proposal) => this.proposal = proposal);
  }
}
