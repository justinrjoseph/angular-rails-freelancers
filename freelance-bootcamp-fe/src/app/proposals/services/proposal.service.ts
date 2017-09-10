import { Injectable } from '@angular/core';

import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';

import { Proposal } from './../models/proposal';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProposalService {
  private _url = 'http://localhost:3001/proposals';

  constructor(private _http: Http) {}

  getAll() : Observable<Proposal[]> {
    return this._http.get(`${this._url}.json`)
      .map((response: Response) => <Proposal[]>response.json());
  }

  getProposal(id: number) : Observable<Proposal> {
    return this._http.get(`${this._url}/${id}.json`)
      .map((response: Response) => <Proposal>response.json());
  }

  create(proposal: Proposal) : Observable<Proposal> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const options = new RequestOptions({
      headers
    });

    return this._http.post(this._url, JSON.stringify(proposal), options)
      .map((response: Response) => <Proposal>response.json());
  }
}