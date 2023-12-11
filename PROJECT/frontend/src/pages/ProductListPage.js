import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts, fetchAllProductsSale, fetchProductsByCategories } from "../asyncActions/products"
import { useLocation, useParams } from "react-router-dom"
import { BASE_URL } from ".."


function ProductListPage({type}){

    const {categories_name, products} = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = useParams()

    useEffect(() => {
        if(type === 'all'){
            dispatch(fetchAllProducts())
        } else if (type === 'sale'){
            dispatch(fetchAllProductsSale())
        } else if (type === 'categories'){
            dispatch(fetchProductsByCategories(id))
        }
        document.body.scrollIntoView({behavior: "smooth" })
    },[location.pathname])

    return(
        <div>
            <h1>{categories_name}</h1>
            <div>
                {products.map(elem => 
                    <div key={elem.id}>
                        <img src={BASE_URL+elem.image} width={200}/>
                        <p>{elem.title}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductListPage