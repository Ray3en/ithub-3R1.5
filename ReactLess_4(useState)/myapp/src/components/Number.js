import { useState, useEffect } from "react";

function Number() {

  // За все динамическое на стороне компонента овтечает хук useState
    
  // useState - это функция, которая позволяет заставить компонент обновится
  // Результатом работы функии являются два выражения:

  // 1) state - фактические значение состояния, которое можно читать/отображать на стороне разметки
  // 2) setState - это функция, которая фаткически позволяет компоненту обновиться в момент вызова
  // Примечание: чтобы указать новое значение стейта - необходимо вызвать сетСтейт и указать новое значение в качестве аргумента
  // Еше: сам стейт (без функции сетСтей) менять категорически запрещено

  // const [state, setState] = useState(defaultState)

  const [count, setCount] = useState(+localStorage.getItem('number'))

  useEffect(() => {
    localStorage.setItem('number', count)
  }, [count])
  
  function addHandler(){
    let answer = prompt()
    if (isNaN(answer)){
        alert('указанное значение не является числом')
    } else {
        setCount(count + +answer)
    }
  }

  function removeHandler(){
    let answer = prompt()
    if (isNaN(answer)){
        alert('указанное значение не является числом')
    } else {
        setCount(count - answer)
    }
  }

  return (
    <div>
        <h1>Счетчик</h1>
        <h1 
            style={{color: (count % 2 == 0) ? 'red' : 'green'}}
        >
            {count}
        </h1>
      <button onClick={() => setCount(count + 1)}>Инкремент!</button>
      <button onClick={() => setCount(count - 1)}>Декремент!</button>
      <button onClick={() => setCount(count + 100)}>Увеличить на 100</button>
      <button onClick={() => setCount(count - 100)}>Уменьшить на 100</button>
      <button onClick={() => addHandler()}>Увеличить на n</button>
      <button onClick={() => removeHandler()}>Уменьшить на n</button>
    </div>
  );
}

export default Number;
