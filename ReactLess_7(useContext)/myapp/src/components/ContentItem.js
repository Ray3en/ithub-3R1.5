import { useContext } from "react"
import { Context } from "../context/Context"

// Хук useContext
// Это функция, которая позволяет получить из зоны области контекста переданноу туда значение 
function ContentItem(){

    const {numbers} = useContext(Context)

    return(
        <ul>
            <h2>ContentItem</h2>
            {numbers.map(elem => <li key={elem}>{elem}</li>)}
        </ul>
    )
}

export default ContentItem