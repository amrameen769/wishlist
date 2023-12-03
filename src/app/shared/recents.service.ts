import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecentsService {
    recentListObj: any = []

    constructor() {
    }

    getAllRecents() {
        const recentList = localStorage.getItem('recents') ?? localStorage.getItem('recents')
        if (recentList) {
            this.recentListObj = JSON.parse(recentList);
        } else {
            this.recentListObj = []
        }
    }

    setRecents(recentItem: any) {
        this.getAllRecents();
        this.recentListObj.append(recentItem)
        localStorage.setItem('recents', JSON.stringify(this.recentListObj))
    }
}
