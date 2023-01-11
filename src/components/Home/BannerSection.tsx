import React from 'react'
import Link from "next/link"
import style from './home.module.scss'
import pattern from '../../icon/bluer-pattern.png'
import { Figure, CircleFigure } from '../../icon/bannerIcon'

export const BannerSection = () => {
 return (
  <section className={style.bannerSection}>
   <div className="container" style={{ position: 'relative', zIndex: 3 }}>
    <h1 className={style.bannerTitle}>
     Your circle of experts!
    </h1>
    <p className={style.bannerText}>
     The circular consulting model is a new-way approach of providing consulting services.
    </p>
    <p className={style.bannerText}>
     The model allows us to provide one-stop-shop services, which makes them easier and unique for each of our clients.
    </p>

    <Link href={'/services/business'}>
     <a className={style.bannerLink}>
      See our areas
     </a>
    </Link>
   </div>
   <span className={style.figureImg}>
    <Figure />
   </span>
   <span className={style.bg}>
    <img src={pattern.src} alt="" />
   </span>
   <span className={style.figureCircle}>
    <CircleFigure />
   </span>
  </section>
 )
}