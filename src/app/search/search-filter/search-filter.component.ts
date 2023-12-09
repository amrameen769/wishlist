import {Component, OnInit} from '@angular/core';
import {filterStruct, SubCategory} from "../interface";
import {FilterService} from "../filter/filter.service";

@Component({
 selector: 'app-search-filter',
 templateUrl: './search-filter.component.html',
 styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

 searchFilters: filterStruct[]
 triggeredFilters: filterStruct[]

 constructor(private filterHandler: FilterService) {
 }

 ngOnInit() {
  this.filterHandler.currentData.subscribe(data => {
   this.searchFilters = data
   this.triggeredFilters = data
  })
 }

 clearFilters() {
  const clearedFilter = this.triggeredFilters.map((mainCat) => {
   mainCat.checked = false
   mainCat.partialChecked = false
   mainCat.subCategories = mainCat.subCategories.map((subCat) => {
    subCat.checked = false
    return subCat
   })
   return mainCat
  })
  this.filterHandler.changeFilter(clearedFilter)
 }

 changeAction(event: any) {
  if (event.id === 'main') {
   let updateMainCategory = this.triggeredFilters.filter((triggerFilter: filterStruct) => triggerFilter.categoryName === event.categoryName)[0]
   const index = this.triggeredFilters.indexOf(updateMainCategory)
   updateMainCategory.checked = event.checked
   updateMainCategory.subCategories = updateMainCategory.subCategories.map((subCat: SubCategory) => ({
    ...subCat,
    checked: event.checked
   }))

   const allChecked = this.checkIfAllChecked(updateMainCategory.subCategories);
   const noneChecked = this.checkIfNoneChecked(updateMainCategory.subCategories);

   if (allChecked || noneChecked) {
    updateMainCategory.partialChecked = false
   }

   this.triggeredFilters[index] = updateMainCategory
  } else if (event.id === 'sub') {
   let updateMainCategory = this.triggeredFilters.filter((triggerFilter: filterStruct) => triggerFilter.categoryName === event.categoryName)[0]
   const mainIndex = this.triggeredFilters.indexOf(updateMainCategory)

   let subCategory = updateMainCategory.subCategories.filter((subCat: SubCategory) => subCat.categoryName === event.subCategory.categoryName)[0]
   const subIndex = updateMainCategory.subCategories.indexOf(subCategory)

   subCategory.checked = event.subCategory.checked;
   updateMainCategory.subCategories.splice(subIndex, 1, subCategory)

   const allChecked = this.checkIfAllChecked(updateMainCategory.subCategories);
   const noneChecked = this.checkIfNoneChecked(updateMainCategory.subCategories);
   const someChecked = !this.checkIfSomeSelected(updateMainCategory.subCategories);

   if (allChecked) {
    updateMainCategory.partialChecked = false
    updateMainCategory.checked = true
   }
   if (someChecked) {
    updateMainCategory.partialChecked = true
    updateMainCategory.checked = false
   }
   if (noneChecked) {
    updateMainCategory.partialChecked = false
    updateMainCategory.checked = false
   }

   this.triggeredFilters[mainIndex] = updateMainCategory
  }


  this.filterHandler.changeFilter(this.triggeredFilters)
 }

 checkIfAllChecked(subCategories: SubCategory[]) {
  return subCategories.every(subCat => subCat.checked === true)
 }

 checkIfNoneChecked(subCategories: SubCategory[]) {
  return subCategories.every(subCat => subCat.checked === false)
 }

 checkIfSomeSelected(subCategories: SubCategory[]) {
  return subCategories.every(subCat => subCat.checked === true)
 }
}
