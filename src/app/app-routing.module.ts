import {Routes} from "@angular/router";

const routes: Routes = [
 {
  path: 'search',
  loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
 },
 {
  path: 'wish',
  loadChildren: () => import('./wish/wish.module').then(m => m.WishModule)
 },
 {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
 }
];

export default routes
