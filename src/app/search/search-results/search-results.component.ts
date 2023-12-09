import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search-service.service";
import {filterStruct} from "../interface";

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{

    constructor(private searchHandler: SearchService) {
    }

    // testing purpose
    ngOnInit() {
        this.getSearchResults('chron')
    }

    searchResults: any = []
    searchResultsMap: any = {}
    searchResultFilter: filterStruct[] = []

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
        }
    }

}
