import { memo, useMemo } from "react"

let render = 0

function Burden({value}){

    // useMemo позволяет указать зависиомсти, по которым будет определять вызов указанной функции в случии обновления компонента
    // Хук позволяет по условию определить, нужно ли выполнять тело функции (возвращать новый return) или нет
    // Сама функция внутри обвертки далее перестанет быть функцией

    // useCallback позволяет не переопредлеять функцию в момент обновления компонента!
    // useMemo в отлочии от useCallback, возвращает НЕ фенкцию
    // Наличие ключевого слово return внутри колбека useMemo обязательное


    console.log(`Компонент Burden был обновлен ${++render} раз`)

    let burderHandler = useMemo(() => {
        console.log('Нагрузка!')
        let i = 0
        while(i < 1_000_000_000){
            i++
        }
        return (value > 5) ? 'Значение больше 5': 'Значение меньше 5'
    }, [value])

    return(
        <div>
            <h2>{burderHandler}</h2>
        </div>
    )
}

// Если колбек вернет false - компонент обновится
// Если вернет true - компонент обновляться не будет

export default memo(Burden, (previousProp,nextProp) => {
    return nextProp.value !== 6
})
