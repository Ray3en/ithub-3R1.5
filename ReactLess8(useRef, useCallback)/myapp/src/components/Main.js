import { forwardRef } from "react"

// forwardRef - обвертка для компонента, которая позволяет получить реф как проп
const Main = forwardRef((props, ref) => {
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

    return(
        <div>
            {numbers.map(elem => 
                (elem === 12 ) ?
                <div key={elem} ref={ref} className="card red">{elem}</div>: 
                <div key={elem} className="card">{elem}</div>
                
            )}
        </div>
    )
})



export default Main