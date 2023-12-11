import { useDispatch, useSelector } from "react-redux"
import { initCapAction, lowerCaseAction, newStringAction, upperCaseAction } from "../store/stringReducer"


function String(){

    const string = useSelector(store => store.string)
    const dispatch = useDispatch()

    // Задание. Реализовать генероатор экшена, который будет возводить стейт в вернхий регистр
    // На стороне компонента реализовать кнопку, которая по нажатию будет выполнять данную логику

    // Задание 2 
    // Реаоизуйте кнопку которая будет возводить первую букву строки в верхний регистр, а оставшийся - в нижний
    // init_cap

    // Усложните решение таким образом, чтобы в вернхий регистр возводилось каждое слово внутри стейта

    // Подговьте еще одну кнопку, которая позволит переопределить строкове значение используя prompt

    return(
        <div>
            <h2>String Redux</h2>
            <h3>{string}</h3>
            <div>
                <button onClick={() => dispatch(upperCaseAction())}>To Upper</button>
                <button onClick={() => dispatch(lowerCaseAction())}>To Lower</button>
                <button onClick={() => dispatch(initCapAction())}>Init cap</button>
                <button onClick={() => dispatch(newStringAction(prompt()))}>New string</button>
            </div>
        </div>
    )
}

export default String