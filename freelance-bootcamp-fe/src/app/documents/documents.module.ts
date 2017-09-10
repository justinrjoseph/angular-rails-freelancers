import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';

import { DocumentsRoutingModule } from './documents-routing.module';

import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentComponent } from './components/document/document.component';

import { DocumentService } from './services/document.service';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    HttpModule
  ],
  declarations: [
    DocumentsComponent,
    DocumentComponent
  ],
  providers: [DocumentService]
})
export class DocumentsModule {}
