import { addProductsAction } from "../store/ProductListReducer"

export function fetchALlProducts(){
    return function(dispatch){
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => dispatch(addProductsAction(data.products)))
    }
}