import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { BreadcrumpsComponent } from '../breadcrumps/breadcrumps.component';



@NgModule({
  declarations: [
    HighlightPipe,
    BreadcrumpsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightPipe,
    BreadcrumpsComponent
  ]
})
export class SharedModule { }
