

const defaultState = {
    categories_name: '',
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ALL_PRODUCTS_SALE = 'ALL_PRODUCTS_SALE'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'

export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {categories_name: 'All products', products: action.payload}
        case ALL_PRODUCTS_SALE:
            return {categories_name: 'Discounted products', products: action.payload}
        case PRODUCTS_BY_CATEGORY:
            return {categories_name: action.payload.category.title, products: action.payload.data}
        case 'RAZ_DVA':
            filter........
            return {...state, products}
        default: 
        return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload})
export const allProductsSaleAction = (payload) => ({type: ALL_PRODUCTS_SALE, payload})
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload})