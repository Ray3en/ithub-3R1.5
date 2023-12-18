
const defaultState = []

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'

export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_PRODUCTS:
            let changed_products_by_fetch = action.payload.map(elem => {
                elem.isShowSale = true
                elem.isShowPrice = true
                elem.discountPercentage = (elem.discountPercentage < 10) ? null : elem.discountPercentage
                return elem
            })
            return changed_products_by_fetch
        case FILTER_BY_SALE:
            let changed_products_by_sale = state.map(elem => {
                elem.isShowSale = (!action.payload) ? true : Boolean(elem.discountPercentage)
                return elem
            })
            return changed_products_by_sale
        case FILTER_BY_PRICE:
            let {max, min} = action.payload
            let changed_products_by_price = state.map(elem => {
                elem.isShowPrice = true
                if (!(elem.price >= min && elem.price <= max)){
                    elem.isShowPrice = false
                }
                return elem
            })
            return changed_products_by_price
        default:
            return state
    }
}


let checkbox = ('sale') ? true : action.payload.checkbox

(msx > price && min < price && checkbox)


export const addProductsAction = (payload) => ({type: ADD_PRODUCTS, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})
export const filterByPriceAction = (payload) => ({type: FILTER_BY_PRICE, payload})