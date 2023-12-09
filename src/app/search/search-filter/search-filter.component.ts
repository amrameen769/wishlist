import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {filterStruct, filterTriggerEvent} from "../interface";

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit{
    @Input({required: true}) searchFilters: filterStruct[]
    @Output() triggerFilter = new EventEmitter<filterTriggerEvent>()

    triggerFiltersObj: filterStruct[]

    ngOnInit() {
        this.triggerFiltersObj = this.searchFilters
    }

    changeAction(event: any){
        console.log(event)
    }
}
