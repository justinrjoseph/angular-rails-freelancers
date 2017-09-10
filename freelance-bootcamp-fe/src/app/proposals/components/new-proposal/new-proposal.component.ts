import { Component } from '@angular/core';

import { ProposalService } from '../../services/proposal.service';

import { Proposal } from './../../models/proposal';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.css']
})
export class NewProposalComponent {
  urlPrefix = 'http://';
  submitted = false;
  
  constructor(private _service: ProposalService) {}

  createProposal(proposal: Proposal) {
    this.submitted = true;

    this._service.create(proposal)
      .subscribe(
        (proposal) => true,
        (error) => {
          console.error('Error generating proposal:', error);
          return Observable.throw(error);
        }
      );
  }
}
