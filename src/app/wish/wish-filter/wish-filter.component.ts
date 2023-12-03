import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WishItem} from 'src/shared/models/WishItem';

const filters = [
    (item: WishItem) => item,
    (item: WishItem) => !item.fulfilled,
    (item: WishItem) => item.fulfilled,
]

@Component({
    selector: 'app-wish-filter',
    templateUrl: './wish-filter.component.html',
    styleUrls: ['./wish-filter.component.scss']
})
export class WishFilterComponent implements OnInit {
    @Input() filter: any
    @Output() filterChange = new EventEmitter<any>();
    listFilter: any = '0';

    ngOnInit() {
        this.updateFilter('0')
    }

    updateFilter(value: any) {
        this.filter = filters[value]
        this.filterChange.emit(this.filter)
    }
}
