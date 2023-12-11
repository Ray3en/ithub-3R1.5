import { useContext } from "react"
import { Context } from "../context/Context"


function Header(){

    const {deleteFirstValue} = useContext(Context)

    return(
        <div>
            <h2>Header</h2>
            <button onClick={() => deleteFirstValue()}>Del first value</button>
        </div>
    )
}

export default Header