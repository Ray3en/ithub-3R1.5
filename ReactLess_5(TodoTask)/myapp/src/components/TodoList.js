import TodoItem from "./TodoItem";

function TodoList(props) {

    const {todos} = props

    return (
      <div>
        {todos.map(elem => <TodoItem 
                                key={elem.id} 
                                id={elem.id}
                                title={elem.title} 
                                completed={elem.completed}
                            />)}
      </div>
    );
  }
  
  export default TodoList;
  