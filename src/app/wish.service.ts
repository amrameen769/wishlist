import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WishItem } from 'src/shared/models/WishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      })
    }
  }

  getWishes() {
    return this.http.get("assets/wishes.json");
  }

  private addWishes(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers.set('Authorization', 'secret')

    this.http.post('assets/wishes.json', wish, options)
  }
}
