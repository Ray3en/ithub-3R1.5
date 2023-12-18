import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchALlProducts } from "../asyncActions/products"
import { filterBySaleAction } from "../store/ProductListReducer"



function ProductList(){

    const productList = useSelector(store => store.productList).filter(elem => elem.isShow)
    const dispatch = useDispatch()

    console.log(productList)

    useEffect(() => {
        dispatch(fetchALlProducts())
    }, [])

    function checkboxHandle(e){
        dispatch(filterBySaleAction(e.target.checked))
    }

    return(
        <div>
            <div>
                <label> Sale:
                    <input onClick={checkboxHandle} type="checkbox"/>
                </label>
            </div>
            <div>
                {productList.map(elem => 
                    <div>
                        <h3>{elem.title}</h3>
                        <p style={{color: (elem.discountPercentage) ? 'red' : 'black'}}>
                            {elem.price}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductList