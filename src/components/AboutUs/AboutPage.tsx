import React from 'react'
import style from './about.module.scss'
import pattern from '../../icon/bluer-pattern.png'
import { AboutInfo } from './aboutInfo'
import { OurTeam } from './OurTeam'

const AboutBanner = () => {

 return (
  <section className={style.ourNewsBanner}>
   <div className="container">
    <div style={{ position: 'relative', zIndex: 3 }}>
     <h2 className={'sectionTitle'} style={{ color: '#fff', fontWeight: 400, fontSize: '55px', lineHeight: '70px' }}>
     About Us
     </h2>
     <div className={style.ourNewsText}>
      <p>We are a global team of experts, solving both everyday and extraordinary needs of our clients.</p>
     </div>
    </div>
   </div>
   <span className={style.bg}>
    <img src={pattern.src} style={{ opacity: 0.52 }} />
   </span>
  </section>
 )
}

export default function AboutPage() {
 return (
  <main>
   <AboutBanner />
   <AboutInfo />
   <OurTeam />
  </main>
 )
}