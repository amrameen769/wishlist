import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { BreadcrumpsComponent } from '../breadcrumps/breadcrumps.component';
import { SearchHighlightDirective } from './directives/search-highlight/search-highlight.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AvatarComponent } from '../avatar/avatar.component';
import { AvatarDropComponent } from '../avatar-drop/avatar-drop.component';



@NgModule({
  declarations: [
    HighlightPipe,
    BreadcrumpsComponent,
    SearchHighlightDirective,
    ClickOutsideDirective,
    AvatarComponent,
    AvatarDropComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightPipe,
    BreadcrumpsComponent,
    SearchHighlightDirective,
    ClickOutsideDirective,
    AvatarComponent,
    AvatarDropComponent
  ]
})
export class SharedModule { }
