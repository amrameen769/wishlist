import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SearchRoutingModule} from "./search-routing.module";
import { SearchResultsComponent } from './search-results/search-results.component';
import {FormsModule} from "@angular/forms";
import {SearchService} from "./search-service.service";
import { SearchFilterComponent } from './search-filter/search-filter.component';


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
 providers: [SearchService]
})
export class SearchModule {
}
