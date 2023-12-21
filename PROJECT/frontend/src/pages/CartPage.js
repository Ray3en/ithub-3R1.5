import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from ".."
import { changeCountAction } from "../store/cartReducer"


function CartPage(){

    const dispatch = useDispatch()
    const cartList = useSelector(store => store.cartList)

    const countAction = (id, count) => dispatch(changeCountAction({id,count}))

    return(
        <div>
            <h2>Cart page</h2>
            <div>
                {cartList.map(elem => 
                    <div key={elem.id}>
                        <img src={BASE_URL+elem.image} width={200}/>
                        <p>{elem.title}</p>
                        <p>{elem.price}</p>
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                            <button onClick={() => countAction(elem.id, -1)}>-</button>
                            <h3>{elem.count}</h3>
                            <button onClick={() => countAction(elem.id, 1)}>+</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage