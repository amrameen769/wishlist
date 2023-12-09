export type SubCategory = {
    categoryName: string
    subCategory?: SubCategory | null
    checked: boolean
}

export interface filterStruct {
    categoryName: string
    subCategories: SubCategory[]
    checked: boolean
    partialChecked: boolean
}
