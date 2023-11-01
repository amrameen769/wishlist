import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { WishItem } from 'src/shared/models/WishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      })
    }
  }

  getWishes() {
    return this.http.get("assets/wishes.json").pipe(catchError(this.httpError));
  }

  private httpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("something wrong with client or network", error.error);
    } else {
      console.error("something went wrong in the server", error.error);
    }

    return throwError(() => new Error("Couldn't fetch data"))
  }

  private addWishes(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers.set('Authorization', 'secret')

    this.http.post('assets/wishes.json', wish, options)
  }
}
