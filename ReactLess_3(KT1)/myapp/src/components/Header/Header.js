import {ReactComponent as LogoSvg} from './icons/logo.svg'
import dinoImg from './icons/dino1.png'
import styles from './Header.module.css'
import Description from '../Description/Descriptions'

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
                <LogoSvg/>
                <div className={styles.menu_wrapper}>
                    <p>О нас</p>
                    <p>Услуги</p>
                    <p>Аренда</p>
                </div>
                <button className={styles.contant_btn}>Связаться</button>
            </div>
            <div className={styles.header_title_wrapper}>
                <Description 
                    isMain={true} 
                    title={'Веломастерская “Велозар”'} 
                    classStyle={{
                        blue_main: 'blue_main_text',
                        blue_second: 'blue_second_text',
                    }}
                    text={'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.'}/>
                <img src={dinoImg}/>
            </div>
        </div>
    )
}

export default Header