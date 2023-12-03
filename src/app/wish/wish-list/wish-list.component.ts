import {Component, Input} from '@angular/core';
import {WishItem} from 'src/shared/models/WishItem';

@Component({
    selector: 'app-wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
    @Input() wishes: WishItem[] = []
}
