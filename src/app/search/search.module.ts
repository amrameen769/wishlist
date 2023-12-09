import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SearchRoutingModule} from "./search-routing.module";


@NgModule({
 declarations: [
  SearchBarComponent
 ],
 imports: [
  CommonModule,
  SearchRoutingModule
 ]
})
export class SearchModule {
}
