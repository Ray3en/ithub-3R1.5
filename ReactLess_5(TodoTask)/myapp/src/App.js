import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Context } from './context/Context';

function App() {

  let data = [
    {id: 1, title: 'Позавтракать', completed: true},
    {id: 2, title: 'Почистить огурцы', completed: false},
    {id: 3, title: 'Помыть кота', completed: true},
  ]

  const [todos, setTodos] = useState(data)

  function removeTodo(id){
    let removedTasks = todos.filter((elem => elem.id !== id))
    setTodos(removedTasks)
  }

  function changeTodo(id){
    let changedTasks = todos.map(elem => {
      if (elem.id === id){
        elem.completed = !elem.completed
      }
      return elem
    })
    setTodos(changedTasks)
  }

  function addNewTodo(title){
    let newTodo = {
      id: Date.now(),
      completed: false,
      title
    }
    setTodos([...todos, newTodo])
  }

   useEffect(() => {
    let local_data = localStorage.getItem('todos')
    if(local_data){
      setTodos(JSON.parse(local_data))
    }
  }, [])

  // Задание 1. Обеспечить непрерывное сохранение актуального массива в LS
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Context.Provider value={{removeTodo, changeTodo}}>
      <div>
        <AddTodo addNewTodo={addNewTodo}/>
        <TodoList 
          todos={todos} 
        />
      </div>
    </Context.Provider>
  );
}

export default App;
