import { Injectable } from '@angular/core';

import { Document } from '../models/document';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DocumentService {
  private _url = 'http://localhost:3000/documents.json';

  constructor(private _http: Http) {}

  getAll() : Observable<Document[]> {
    return this._http.get(this._url)
      .map((response: Response) => <Document[]>response.json())
      .catch(this._handleError);
  }

  private _handleError(error: Response | any) {
    let errMsg: string;

    if ( error instanceof Response ) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
