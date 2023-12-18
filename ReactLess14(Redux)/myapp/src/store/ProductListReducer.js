
const defaultState = []

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const FILTER_BY_SALE = 'FILTER_BY_SALE'

export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_PRODUCTS:
            let changed_products_by_fetch = action.payload.map(elem => {
                elem.isShow = true
                elem.discountPercentage = (elem.discountPercentage < 10) ? null : elem.discountPercentage
                return elem
            })
            return changed_products_by_fetch
        case FILTER_BY_SALE:
            let changed_products_by_sale = state.map(elem => {
                elem.isShow = (!action.payload) ? true : Boolean(elem.discountPercentage)
                return elem
            })
            return changed_products_by_sale
        default:
            return state
    }
}


export const addProductsAction = (payload) => ({type: ADD_PRODUCTS, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})