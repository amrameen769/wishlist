import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { BreadcrumpsComponent } from '../breadcrumps/breadcrumps.component';
import { SearchHighlightDirective } from './directives/search-highlight/search-highlight.directive';



@NgModule({
  declarations: [
    HighlightPipe,
    BreadcrumpsComponent,
    SearchHighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightPipe,
    BreadcrumpsComponent,
    SearchHighlightDirective
  ]
})
export class SharedModule { }
