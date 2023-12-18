import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchALlProducts } from "../asyncActions/products"
import { filterByPriceAction, filterBySaleAction } from "../store/ProductListReducer"



function ProductList(){

    const productList = useSelector(store => store.productList).filter(elem => elem.isShowSale && elem.isShowPrice)
    const dispatch = useDispatch()

    // console.log(productList)

    useEffect(() => {
        dispatch(fetchALlProducts())
    }, [])

    function checkboxHandle(e){
        dispatch(filterBySaleAction(e.target.checked))
    }

    function formHandler(e){
        let form_data = new FormData(e.target.parentElement)
        let data = Object.fromEntries(form_data)
        data.min = (data.min) ? +data.min : 0
        data.max = (data.max && (+data.max >= data.min)) ? +data.max : Infinity
        dispatch(filterByPriceAction(data))
    }

    return(
        <div>
            <div>
                <form onChange={formHandler}>
                    <input name='min' placeholder="ОТ" type="number"/>
                    <input name="max" placeholder='ДО' type="number"/>
                </form>
                <label> Sale:
                    <input onClick={checkboxHandle} type="checkbox"/>
                </label>
            </div>
            <div>
                {productList.map(elem => 
                    <div key={elem.id}>
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