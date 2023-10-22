import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishItemComponent } from './wish-item/wish-item.component';
import {EventService} from "src/shared/services/EventService";
import { MarkdownModule} from 'ngx-markdown';
import { CodeHighlighterComponent } from './code-highlighter/code-highlighter.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishComponent,
    WishFilterComponent,
    WishItemComponent,
    CodeHighlighterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
