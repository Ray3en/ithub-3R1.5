import Numbers from "./Numbers"
import PostList from "./PostList"

// Как картинку
import tigran from '../dino.svg'
// Как SVG
import  {ReactComponent as DinoComponent}  from '../dino.svg'

// Создайте компонент Numbers, который будет итерироваться по массиву num
// и фомировать маркированный список
// let num = [1,2,3,4,5,6,7,8,9]

function App(){
    return(
        <div>
          <PostList/>
          <Numbers/>
          <img src={tigran}/>
          <DinoComponent/>
        </div>
    )

}

export default App