import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { DocumentsModule } from './documents/documents.module';
import { ProposalsModule } from './proposals/proposals.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';

@NgModule({
  imports: [
    BrowserModule,  
    AppRoutingModule,
    CoreModule,
    DocumentsModule,
    ProposalsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
