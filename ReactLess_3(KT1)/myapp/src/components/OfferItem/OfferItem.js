import styles from './OfferItem.module.css'


function OfferItem(props){

    const {title,color} = props
    return(
        <div className={styles.offer_item} style={{backgroundColor: color}}>
            <hr className={styles.line}/>
            <h2 className='white_main_text'>{title}</h2>
        </div>
    )
}


export default OfferItem