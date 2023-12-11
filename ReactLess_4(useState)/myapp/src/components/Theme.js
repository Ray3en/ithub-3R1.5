import { useState } from "react"

function Theme(){

    const [theme, setTheme] = useState('green')
    const [visible, setVisible] = useState(true)

    // Задание: реадизайте еще 1 стейт, который будет передавать булeвый тип (visible)
    // В зависимости от этого булевого типа необходимо либо отображть маркированый список, либо нет
    // На разметке необходимо создать еще одну нопку, которая будет переключать тип с true на false и false на true 

    function changeTheme(){
        if (theme === 'green'){
            setTheme('red')
        } else {
            setTheme('green')
        }
    }

    return(
        <div style={{backgroundColor: theme}}>
            <h1>Смена темы</h1>
            <button onClick={() => changeTheme()}>Поменять тему</button>
            <button onClick={() => setVisible(!visible)}>Спрятать/Показать!</button>
            {visible  && 
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
            }
        </div>
    )
}


export default Theme