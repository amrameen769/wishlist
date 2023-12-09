import {Injectable} from '@angular/core';
import {filterStruct} from "../interface";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class FilterService {

 filters: filterStruct[] = []

 private filterSubject = new BehaviorSubject<filterStruct[]>(this.filters);
 currentData = this.filterSubject.asObservable()

 constructor() {
 }

 changeFilter(newFilter: filterStruct[]) {
  this.filterSubject.next(newFilter);
  // console.log(this.filterSubject.getValue())
 }
}
