import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishItemComponent } from './wish-item/wish-item.component';


@NgModule({
  declarations: [
    WishListComponent,
    AddWishComponent,
    WishFilterComponent,
    WishItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WishListComponent,
    AddWishComponent,
    WishFilterComponent,
    WishItemComponent,
  ]
})
export class WishModule { }
