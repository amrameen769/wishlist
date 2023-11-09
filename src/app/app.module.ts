import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EventService} from "src/shared/services/EventService";
import { MarkdownModule} from 'ngx-markdown';
import { CodeHighlighterComponent } from './code-highlighter/code-highlighter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeHighlighterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    WishModule,
    ContactModule
  ],
  providers: [
    EventService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
