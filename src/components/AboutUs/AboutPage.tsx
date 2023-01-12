import React from 'react'
import newsStyle from '../news/news.module.scss'
import pattern from '../../icon/bluer-pattern.png'

const AboutBanner = () => {

 return (
  <section className={newsStyle.ourNewsBanner}>
   <div className="container">
    <div style={{ position: 'relative', zIndex: 3 }}>
     <h2 className={'sectionTitle'} style={{ color: '#fff', fontWeight: 400, fontSize: '55px', lineHeight: '70px' }}>
     About Us
     </h2>
     <div className={newsStyle.ourNewsText}>
      <p>We are a global team of experts, solving both everyday and extraordinary needs of our clients.</p>
     </div>
    </div>
   </div>
   <span className={newsStyle.bg}>
    <img src={pattern.src} style={{ opacity: 0.52 }} />
   </span>
  </section>
 )
}

export default function AboutPage() {
 return (
  <main>
   <AboutBanner />
  </main>
 )
}