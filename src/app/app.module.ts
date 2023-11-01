import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EventService} from "src/shared/services/EventService";
import { MarkdownModule} from 'ngx-markdown';
import { CodeHighlighterComponent } from './code-highlighter/code-highlighter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WishModule } from './wish/wish.module';

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
    WishModule
  ],
  providers: [
    EventService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
