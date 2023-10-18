import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
import {EventService} from 'src/shared/services/EventService';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss']
})
export class WishItemComponent {
  @Input() wish!: WishItem;
  get getClasses() {
    return {
      'strike text-fade': this.wish.fulfilled
    }
  }

  constructor(private events: EventService){}

  toggleItem() {
    this.wish.fulfilled = !this.wish.fulfilled
  }

  removeItem() {
    this.events.emit('removeWish', this.wish)
  }
}
