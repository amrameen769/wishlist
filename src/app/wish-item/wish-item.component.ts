import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
import events from 'src/shared/services/EventService';

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

  toggleItem() {
    this.wish.fulfilled = !this.wish.fulfilled
  }

  removeItem() {
    events.emit('removeWish', this.wish)
  }
}
