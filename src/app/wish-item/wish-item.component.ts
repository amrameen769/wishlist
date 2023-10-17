import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss']
})
export class WishItemComponent {
  @Input() wishText!: string
  @Input() fulfilled!: boolean
  @Output() fulfilledChange = new EventEmitter<boolean>()

  toggleItem() {
    this.fulfilled = !this.fulfilled
    this.fulfilledChange.emit(this.fulfilled)
  }
}
