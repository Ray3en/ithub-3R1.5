

function Header({autoScroll}){
    return(
        <div className='header'>
            <button onClick={autoScroll}>Auto scroll!</button>
        </div>
    )
}

export default Header