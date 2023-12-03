import {Component, Input} from '@angular/core';
import {WishItem} from 'src/shared/models/WishItem';
import {EventService} from 'src/shared/services/EventService';
import {FavoritesService} from "../../shared/favorites.service";

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

    constructor(private favService: FavoritesService, private events: EventService) {
    }

    toggleItem() {
        this.wish.fulfilled = !this.wish.fulfilled
        this.favService.setFavorites(this.wish.wishText)
    }

    removeItem() {
        this.events.emit('removeWish', this.wish)
    }
}
