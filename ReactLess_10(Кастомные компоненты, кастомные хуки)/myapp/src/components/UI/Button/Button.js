import s from './Button.module.css'

function Button(props){

    const {title, theme, ...otherProps} = props
    
    return(
        <button 
            {...otherProps}
            className={`${s.btn_elem} ${s[theme]}`}
        >
            {title}
        </button>
    )
}

export default Button