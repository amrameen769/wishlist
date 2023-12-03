import { Component } from '@angular/core';
import {FavoritesService} from "../../shared/favorites.service";
import {PaginationService} from "../../shared/pagination.service";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
  providers: [PaginationService]
})
export class FavoriteListComponent {

  totalPages: number
  favorites = []
  paginatedFav = []
  currentPage: number;

  constructor(private favoritesService: FavoritesService, private paginator: PaginationService) {
    this.favoritesService.getAllFavorites()
    this.favorites = favoritesService.favListObj;
    this.totalPages = this.paginator.getTotalPages(this.favorites.length);
    this.changePage(1);

  }

  changePage(page: number){
    this.paginator.changePage(page);
    this.currentPage = this.paginator.currentPage;
    const inset = (this.currentPage-1)*this.paginator.limit
    const offset = inset + this.paginator.limit
    this.paginatedFav = this.favorites.filter((item, index) => index >= inset && index < offset)
  }
}
