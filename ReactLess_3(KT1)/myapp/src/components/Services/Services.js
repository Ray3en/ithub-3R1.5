import Description from '../Description/Descriptions'
import styles from './Services.module.css'
import imageBike from './imageBike.png'

function Services(){
    return (
        <div className={styles.services_wrapper}>
            <Description 
                    isMain={false} 
                    title={'Что мы предлагаем'} 
                    classStyle={{
                        white_main: 'white_main_text',
                        white_second: 'white_second_text',
                    }}
                    text={'В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. '}/>
            <img className={styles.img_content} src={imageBike}/>
        </div>
    )
}


export default Services