import {Component, Output, EventEmitter} from '@angular/core';
import {WishItem} from 'src/shared/models/WishItem';

@Component({
    selector: 'app-add-wish',
    templateUrl: './add-wish.component.html',
    styleUrls: ['./add-wish.component.scss']
})
export class AddWishComponent {
    @Output() addWish = new EventEmitter<WishItem>();
    newWishText: string = ''

    addItem(event: any) {
        this.addWish.emit(new WishItem(this.newWishText))
        this.newWishText = ''
    }
}
