import { useContext } from "react";
import { Context } from "../context/Context";

function TodoItem(props) {

  const {title, completed, id} = props
  const {removeTodo, changeTodo } = useContext(Context)  


    return (
      <div  
        className="todo_item"
        onDoubleClick={() => removeTodo(id)}
        onClick={() => changeTodo(id)}
        style={{backgroundColor: (completed) ? 'green' : 'red'}}
      >
        <h1>{title}</h1>
      </div>
    );
  }
  
  export default TodoItem;
  