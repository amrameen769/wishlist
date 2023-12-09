import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {SearchBarComponent} from "./search-bar/search-bar.component";
import {SearchResultsComponent} from "./search-results/search-results.component";

const routes: Routes = [
 {
  path: '',
  component: SearchResultsComponent
 }
]

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class SearchRoutingModule {
}
