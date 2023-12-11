// Создайте компонент Numbers, который будет итерироваться по массиву num
// и фомировать маркированный список


function Numbers(){
    let num = [1,2,3,4,5,6,7,8,9]

    return(
        <ul>
            {num.map((elem, index) => <li key={index}>{elem}</li>)}
        </ul>
    )
}

export default Numbers