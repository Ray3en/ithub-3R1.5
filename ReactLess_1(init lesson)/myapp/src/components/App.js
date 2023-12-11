import Description from "./Description"
import Image from "./Image"

// Добавьте новый проп, который будет добавлять тектсовое сво-во внутри div

function App(){
    return(
      <div>
        {/* <Image/> */}
        <Description text='Text 1' size='xl' color='blue'/>
        <Description text='Text 2' size='l' color='red'/>
        <Description text='Text 3' size='m' color='purple'/>
      </div>
    )
  }

export default App