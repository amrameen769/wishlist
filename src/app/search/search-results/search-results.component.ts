import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search-service.service";
import {filterStruct, SubCategory} from "../interface";
import {FilterService} from "../filter/filter.service";
import {PaginationService} from "../../shared/pagination.service";

@Component({
 selector: 'app-search-results',
 templateUrl: './search-results.component.html',
 styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

 constructor(private searchHandler: SearchService, private filterHandler: FilterService, private paginator: PaginationService) {
 }


 searchResults: any = []
 searchResultsMap: any = {}
 searchResultFilter: filterStruct[] = []
 filteredResults: any = []
 filteredResultMap: any = []

 totalPages: number
 currentPage: number
 paginatedFilteredResults: any = []


 // testing purpose
 ngOnInit() {
  // this.showSearchResults('d')
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
   this.filteredResults.sort((a: any, b: any) => {
    let fa = a.category.toLowerCase(),
     fb = b.category.toLowerCase();
    if (fa < fb) {
     return -1;
    }
    if (fa > fb) {
     return 1;
    }
    return 0;
   })
   this.totalPages = this.paginator.getTotalPages(this.filteredResults.length, 25)
   this.changePage(1);
  })
 }

 changePage(page: number) {
  this.paginator.changePage(page);
  this.currentPage = this.paginator.currentPage;
  const inset = (this.currentPage - 1) * this.paginator.limit
  const offset = inset + this.paginator.limit
  this.paginatedFilteredResults = this.filteredResults.filter((item: any, index: any) => index >= inset && index < offset)
  this.getCategorizedResults()
 }

 async getSearchResults(searchParam: string) {

  const matchedResults = await this.searchHandler.getData(searchParam)

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
  this.paginatedFilteredResults.forEach((fres: any) => {
   if (this.filteredResultMap.hasOwnProperty(fres.category)) {
    this.filteredResultMap[fres.category].push(fres)
   } else {
    this.filteredResultMap[fres.category] = []
    this.filteredResultMap[fres.category].push(fres)
   }
  })
 }

 extractData(object: any) {
  return object.value
 }
}
