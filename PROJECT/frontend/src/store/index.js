import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './productListReducer'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({
    productList: productListReducer,
    cartList: cartReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))