import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
import events from "src/shared/services/EventService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem("Learn Angular"),
    new WishItem("Learn Routing", true),
    new WishItem("Learn API")
  ];
  title = 'Wishlist';

  filter: any = () => []

  constructor() {
    events.listen("removeWish", (event: any) => {
      let index = this.items.indexOf(event);
      this.items.splice(index, 1);
    })
  }
}
