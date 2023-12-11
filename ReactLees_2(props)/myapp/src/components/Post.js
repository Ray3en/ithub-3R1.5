

function Post(props){
    const {color, title, text} = props
    return(
        <div className="post_item">
          <h2 style={{color}}>{title}</h2>
          <p>{text}</p>
        </div>
    )
}

export default Post

