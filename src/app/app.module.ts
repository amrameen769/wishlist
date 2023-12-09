import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {EventService} from "src/shared/services/EventService";
import {MarkdownModule} from 'ngx-markdown';
import {CodeHighlighterComponent} from './code-highlighter/code-highlighter.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import routes from "./app-routing.module";

@NgModule({
 declarations: [
  AppComponent,
  CodeHighlighterComponent,
  NavbarComponent,
 ],
 imports: [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule.forRoot(
   routes,
  ),
  MarkdownModule.forRoot({
   loader: HttpClient
  }),
  SharedModule,
 ],
 providers: [
  EventService,
  HttpClient
 ],
 bootstrap: [AppComponent]
})
export class AppModule {
}
