import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {
    currentPage: number;
    limit = 5;
    totalPages: number;

    getTotalPages(totalItems: number) {
        this.currentPage = 0
        this.totalPages = Math.ceil(totalItems / this.limit);
        return this.totalPages;
    }

    changePage(page: number){
        if(page>= 1 && page <= this.totalPages){
            this.currentPage=page
        }
    }

    constructor() {
    }
}
