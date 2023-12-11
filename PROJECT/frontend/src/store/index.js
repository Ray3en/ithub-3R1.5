import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './productListReducer'

const rootReducer = combineReducers({
    productList: productListReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))