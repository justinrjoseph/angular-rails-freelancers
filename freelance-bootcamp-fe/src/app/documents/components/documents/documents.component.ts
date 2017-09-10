import { timer } from 'rxjs/observable/timer';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Document } from '../../models/document';

import { DocumentService } from '../../services/document.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit, OnDestroy {
  documents: Document[];
  errorMessage: string;
  subscription: Subscription;

  constructor(private _service: DocumentService) {}

  ngOnInit() : void {
    let timer = Observable.timer(0, 5000);

    this.subscription = timer.subscribe(() => this.getDocuments());
  }

  getDocuments() : void {
    this._service.getAll()
      .subscribe(
        (documents) => this.documents = documents,
        (error) => this.errorMessage = error
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
