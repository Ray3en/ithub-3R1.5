import {useCallback, useEffect, useRef, useState} from 'react'


function Example() {

  const [numbers, setNumbers] = useState([1,2,3,4,5])

  // Задача useRef - создать объект, значение которого после обнолвения меняться (переопределяться) не будет
  // Сво-во current после обновления будет хранить актуальные данные, которые в него было переданы
  // useRef далее заменяет querySelector внутри react приложения
  let ulRef = useRef()

  // Пример useRef, который может содержать не только тег, но и любое другое указанное значение 
  let numberRef = useRef()
  numberRef.current = numbers

  // useCallback - это хук, который позволяет функции не пересоздаваться в момент обновления компонента
  // Хук позволяет указать зависимости (режим работы, когда нужно или не нужно пересоздавать функцию в момент обнолвения компонента)
  // Зависимости работаю также (аналогично) как в useEffect

  let handler = useCallback(() => {
    console.log('scrol!!!')
    console.log(numbers,numberRef.current)
  },[])

  let stopScroll = () => {
    ulRef.current.removeEventListener('scroll', handler)
  }

  useEffect(() => {
    // ul_elem = document.querySelector('ul')
    ulRef.current.addEventListener('scroll', handler)
  }, [])

  return (
    <div >
      <ul ref={ulRef}>
        {numbers.map(elem => <li key={elem}>{elem}</li>)}
      </ul>
      <div>
        <button onClick={() => setNumbers([...numbers, numbers.length+1])}>Увеличить массив!</button>
        <button onClick={() => stopScroll()}>Убрать событие</button>
      </div>
    </div>
  );
}

export default Example;
