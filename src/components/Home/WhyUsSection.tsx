import style from './home.module.scss'
import pattern from '../../icon/bluer-pattern.png'
import { CircleHome, CircleLogoIcon, CircleM } from '../../icon/homeIcon'
export const WhyUsSection = () => {
 return (
  <section className={style.whySection} id='#about'>
   <div className="container">
    <div style={{ position: 'relative', zIndex: 3 }}>
     <h2 className={'sectionTitle'} style={{ color: '#fff' }}>
      Why us?
     </h2>
     <p>Circular model - customer convenience as well as cost reduction</p>
     <p>Efficient methodology to reduce time and costs</p>
     <p>Access to a unique community (development)</p>
     <p>We have all licences for operations</p>
     <p>Versatile and flexible approach</p>
     <p>No hidden costs!</p>
    </div>
   </div>
   <span className={style.CircleFigureII}>
    <CircleHome />
   </span>
   <span className={style.CircleM}>
    <CircleM />
   </span>
   <span className={style.whyBg}>
    <img src={pattern.src} alt="" />
   </span>
   <span className={style.circleLogo}>
    <CircleLogoIcon />
   </span>
  </section>
 )
}