import s from './Input.module.css'

function Input(props){

    const {size, ...otherProps} = props

    return(
        <input
            {...otherProps}
            className={`${s.inp_elem} ${s[size]}`}
        />
    )
}

export default Input