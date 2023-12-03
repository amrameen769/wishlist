import { Component } from '@angular/core';
import {PaginationService} from "../../shared/pagination.service";
import {RecentsService} from "../../shared/recents.service";

@Component({
  selector: 'app-recent-list',
  templateUrl: './recent-list.component.html',
  styleUrls: ['./recent-list.component.scss'],
  providers:[PaginationService]
})
export class RecentListComponent {
  totalPages: number
  recents = []
  paginatedRec = []
  currentPage: number;

  constructor(private recentsService: RecentsService, private paginator: PaginationService) {
    recentsService.getAllRecents()
    this.recents = recentsService.recentListObj
    this.totalPages = this.paginator.getTotalPages(this.recents.length);
    this.changePage(1);

  }

  changePage(page: number){
    this.paginator.changePage(page);
    this.currentPage = this.paginator.currentPage;
    const inset = (this.currentPage-1)*this.paginator.limit
    const offset = inset + this.paginator.limit
    this.paginatedRec = this.recents.filter((item, index) => index >= inset && index < offset)
  }
}
