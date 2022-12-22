import React from 'react'
import style from './home.module.scss'
import logoPlaceholder from '../../icon/LOGO.png'

interface Partner {
 name: string,
 logo: string,
}
const PARTNETS: Partner[] = [
 {
  name: 'Placeholder',
  logo: ''
 },
 {
  name: 'Placeholder',
  logo: ''
 },
 {
  name: 'Placeholder',
  logo: ''
 }
]

const PartnerCard = (props: Partner) => {
 const { name, logo } = props
 const imgUrl = logo.length === 0 ? logoPlaceholder.src : logo
 return (
  <div className={style.partnerItem}>
   <img src={imgUrl} alt={name} />
  </div>
 )
}

export const PartnersSection = () => {
 return (
  <section className={style.partnersBox}>
   <div className="container">
    <h2 className={'sectionTitle'} style={{ textAlign: 'right' }}>
     Our Partners
    </h2>
    <div className={style.partnersGrid}>
     {
      PARTNETS.map((item, i) => <PartnerCard key={i} {...item} />)
     }
    </div>
   </div>
  </section>
 )
}