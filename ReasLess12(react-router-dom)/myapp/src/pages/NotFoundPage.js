import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"


function NotFoundPage(){

    const location = useLocation()    
    
    const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/')
    //     }, 2000)
    // }, [])

    return(
        <div className="content">
            <button onClick={() => navigate('/')}>Go home</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <img src="https://thumbs.dreamstime.com/b/not-found-175307146.jpg"/>
        </div>
    )
}

export default NotFoundPage