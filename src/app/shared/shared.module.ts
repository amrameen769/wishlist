import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { BreadcrumpsComponent } from '../breadcrumps/breadcrumps.component';
import { SearchHighlightDirective } from './directives/search-highlight/search-highlight.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';



@NgModule({
  declarations: [
    HighlightPipe,
    BreadcrumpsComponent,
    SearchHighlightDirective,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightPipe,
    BreadcrumpsComponent,
    SearchHighlightDirective,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
