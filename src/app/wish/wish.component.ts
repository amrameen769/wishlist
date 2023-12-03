import {Component, OnInit} from '@angular/core';
import {WishItem} from 'src/shared/models/WishItem';
import {EventService} from 'src/shared/services/EventService';
import {WishService} from './wish.service';

@Component({
    selector: 'app-wish',
    templateUrl: './wish.component.html',
    styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
    items: WishItem[] = []

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
