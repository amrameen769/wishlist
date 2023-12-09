import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search-service.service";
import {filterStruct, SubCategory} from "../interface";
import {FilterService} from "../filter/filter.service";

@Component({
 selector: 'app-search-results',
 templateUrl: './search-results.component.html',
 styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

 constructor(private searchHandler: SearchService, private filterHandler: FilterService) {
 }


 searchResults: any = []
 searchResultsMap: any = {}
 searchResultFilter: filterStruct[] = []
 filteredResults: any = []
 filteredResultMap: any = []

 // testing purpose
 ngOnInit() {
  this.showSearchResults('d')
  this.filterHandler.currentData.subscribe((currentFilters) => {
   let currentFilterResults: filterStruct[] = []
   currentFilters.forEach((filter) => {
    if (filter.checked) {
     currentFilterResults.push(...this.searchResultsMap[filter.categoryName])
    } else if (filter.partialChecked) {
     filter.subCategories.forEach((subCat: SubCategory) => {
      if (subCat.checked) {
       const subCategoryResults = this.searchResultsMap[filter.categoryName].filter((result: any) => {
        return result.subcategory === subCat.categoryName
       })
       currentFilterResults.push(...subCategoryResults)
      }
     })
    }
   })
   this.filteredResults = currentFilterResults.length > 0 ? currentFilterResults : this.searchResults
   this.getCategorizedResults()
  })
 }

 async getSearchResults(searchParam: string) {
  const res = await fetch("assets/mockdata/search-data.json")
  const results = await res.json()
  const regex = new RegExp(searchParam, 'i')
  const matchedResults = results.filter((result: any) => regex.test(result.title))

  matchedResults.forEach((mres: any) => {
   if (this.searchResultsMap.hasOwnProperty(mres.category)) {
    this.searchResultsMap[mres.category].push(mres)
   } else {
    this.searchResultsMap[mres.category] = []
    this.searchResultFilter.push({
     categoryName: mres.category,
     subCategories: [],
     checked: false,
     partialChecked: false
    })
    this.searchResultsMap[mres.category].push(mres)
   }
  })

  let resultFilter: filterStruct[] = [...this.searchResultFilter]

  resultFilter.forEach((searchFilter: filterStruct, index) => {
   if (this.searchResultsMap.hasOwnProperty(searchFilter.categoryName)) {
    this.searchResultsMap[searchFilter.categoryName].forEach((resultObj: any) => {
     if (!this.searchResultFilter[index].subCategories?.length) {
      this.searchResultFilter[index].subCategories?.push({
       categoryName: resultObj.subcategory,
       checked: false
      })
     } else {
      const subCat = this.searchResultFilter[index].subCategories?.filter(subc => subc.categoryName === resultObj.subcategory)
      if (subCat !== undefined && subCat.length === 0) {
       this.searchResultFilter[index].subCategories?.push({
        categoryName: resultObj.subcategory,
        checked: false
       })
      }
     }
    })
   }
  })

  this.searchResultFilter = resultFilter

  return matchedResults
 }

 async showSearchResults(searchParam: string) {
  if (searchParam) {
   this.searchResults = await this.getSearchResults(searchParam)
   this.filterHandler.changeFilter(this.searchResultFilter);
   this.getCategorizedResults();
  }
 }

 getCategorizedResults() {
  this.filteredResultMap = {}
  this.filteredResults.forEach((fres: any) => {
   if (this.filteredResultMap.hasOwnProperty(fres.category)) {
    this.filteredResultMap[fres.category].push(fres)
   } else {
    this.filteredResultMap[fres.category] = []
    this.filteredResultMap[fres.category].push(fres)
   }
  })
 }

 extractData(object: any){
  return object.value
 }
}
