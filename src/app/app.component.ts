import { Component, OnInit } from '@angular/core';
import { markdown } from 'src/shared/mock/markdown';
import { WishItem } from 'src/shared/models/WishItem';
import { EventService } from "src/shared/services/EventService";
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: WishItem[] = []
  title = 'Wishlist';
  markdownData = markdown;

  filter: any = () => []

  constructor(events: EventService, private wishService: WishService) {
    events.listen("removeWish", (event: any) => {
      let index = this.items.indexOf(event);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      {
        next: (value: any) => {
            this.items = value
        },
        error(err) {
            alert(err)
        },
      }
    );
  }
}
