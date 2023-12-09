import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SearchRoutingModule} from "./search-routing.module";
import { SearchResultsComponent } from './search-results/search-results.component';
import {FormsModule} from "@angular/forms";
import {SearchService} from "./search-service.service";
import { SearchFilterComponent } from './search-filter/search-filter.component';
import {FilterService} from "./filter/filter.service";


@NgModule({
 declarations: [
  SearchBarComponent,
  SearchResultsComponent,
  SearchFilterComponent
 ],
 imports: [
  CommonModule,
  SearchRoutingModule,
  FormsModule
 ],
 providers: [SearchService, FilterService]
})
export class SearchModule {
}
