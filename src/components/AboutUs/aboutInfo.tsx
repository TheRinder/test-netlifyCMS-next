import React from "react";
import pattern from '../../icon/aboutUpPic.png'
import style from './about.module.scss'

export const AboutInfo = () => {
 return (
  <section className={'container'}>
   <div className={style.aboutBox}>
    <div className={style.aboutImage}>
     <img src={pattern.src} alt="" />
    </div>
    <div className={style.aboutText}>
     <p>
      Our primary focus is on the circular approach, ensuring our clients save important resources including time. Circular approach is the holistic way of doing business, which makes consulting more effective and reduces agency risks. This approach is proven to be highly effective and pragmatic. We provide services at all levels of the business (strategic, financial, operational) and therefore create a cohesive set of solutions for our customers. It takes the whole perspective of a company into account and aims to create sustainable value. We believe this makes us unique as a consulting service provider, since the processes of building work covers not only operational, but also a set of additional necessary directions.
     </p>
    </div>
   </div>
  </section>
 )
}