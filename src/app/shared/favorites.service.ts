import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FavoritesService {
    favListObj: any = []

    constructor() {
    }

    getAllFavorites() {
        const favList = localStorage.getItem('favorites') ?? localStorage.getItem('favorites')
        if (favList) {
            this.favListObj = JSON.parse(favList);
        } else {
            this.favListObj = []
        }
    }

    setFavorites(favItem: any) {
        this.getAllFavorites();
        this.favListObj.push(favItem)
        localStorage.setItem('favorites', JSON.stringify(this.favListObj))
    }
}
