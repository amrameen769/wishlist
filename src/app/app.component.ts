import { Component } from '@angular/core';
import { markdown } from 'src/shared/mock/markdown';
import { WishItem } from 'src/shared/models/WishItem';
import {EventService} from "src/shared/services/EventService";

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
  markdownData = markdown;

  filter: any = () => []

  constructor(events: EventService) {
    events.listen("removeWish", (event: any) => {
      let index = this.items.indexOf(event);
      this.items.splice(index, 1);
    })
  }
}
