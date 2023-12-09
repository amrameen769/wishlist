import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

 constructor() {
 }

 async getData(searchParam: string) {
  const res = await fetch("assets/mockdata/search-data.json")
  const results = await res.json()
  const regex = new RegExp(searchParam, 'i')
  const matchedResults = results.filter((result: any) => regex.test(result.title))
  return matchedResults
 }
}
