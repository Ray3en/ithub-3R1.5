

function Description(props){

    let {text ,size, color} = props

    // let size = 'xl'
    // let color = 'red'

    let sizeValue = {
      xl: '400px',
      l: '200px',
      m: '100px'
    }

    let styleObj = {
      backgroundColor: color,
      width: sizeValue[size],
      height: sizeValue[size]
    }

    return(
      <div style={styleObj}>
        {text}
      </div>
    )
}
  

export default Description

















  // let message = 'Hello!'
  // let number = 10
  // let visible = true

    // return(
    //   <div>
    //     <p id={message+'_elem'}>{message}</p>
    //     <p>{(number < 10) ? 'number < 10': 'number >= 10'}</p>
        // {(visible) ? <h1>true</h1> : <h5>false</h5>}
    //     {(visible) ? <h1>true</h1> : ''}
    //     {visible && <h1>true</h1>}
    //   </div>
    // )

    // Зданаие: задана переменная num с числовым значением
    // Если числовой тип делится на 2 без остатка, в компонетне 
    // должен появиться заголовок h1 с значением Вычисляется, если нет - обычный параграф с значением не вычисляется
  
    // let num = 9
    // let message = 'Hello!'
    // let visible = false

    // return(
    //   <div>
    //       {(num ** 0.5 % 1 === 0) ? <h1>Вычисляется</h1> : <p>Не вычисляется</p>}

    //       <p style={{color: (visible) ? 'red' : 'green'}}>{message}</p>
    //   </div>
    // )

    // Заданы две переменые size и color
    // Необходимо создать div элемента с указанными размерами в зависимости от занчение переменной size 
    // а также фоном, котоый передаетсяв занчении color
    // в случае, если size будет xl, размеры элемента должна быть 400х400
    // l - 200x200
    // m - 100x100
    // color передает текстовый тип цвета. 
    // 'red', 'blue', 'purple'

    // let size = 'l'
    // let color = 'purple'

    // let sizeObj = {}

    // if(size === 'xl'){
    //   sizeObj.height = '400px'
    //   sizeObj.width = '400px'
    // } else if (size === 'l'){
    //   sizeObj.height = '200px'
    //   sizeObj.width = '200px'
    // } else if (size === 'm'){
    //   sizeObj.height = '100px'
    //   sizeObj.width = '100px'
    // }

    // let styleObj = {
    //   backgroundColor: color,
    //   width: sizeObj.width,
    //   height: sizeObj.height
    // }

    // return(
    //   <div style={styleObj}>
    //   </div>
    // )

    // Задан объект productInfo
    // На стороен разметки необходимо создать два тега h1 и p
    // h1 должен пердавать значение имени продукта
    // p должен отображать текстовое сво-во 'Sale!' (красного цвета) по условию: 
    // Если товар продается со скидкой, параграф должен оказаться на размкетке, 
    // если скидки нет - параграфа быть не должно

  //   let productInfo = {
  //     name: 'Велосипед',
  //     price: 199,
  //     salePrice: 19
  //   }

  //   let isSale = productInfo.price !== productInfo.salePrice

  //  return(
  //   <div>
  //     <h1>{productInfo.name}</h1>
  //     {isSale && <p style={{color: 'red'}}>Sale!!!</p>}
  //   </div>
  //  )