import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {WishComponent} from "./wish.component";

const routes: Routes = [
 {
  path: '',
  component: WishComponent
 }
]

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class WishRoutingModule {
}
