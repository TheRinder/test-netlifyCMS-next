import React from 'react'
import style from './home.module.scss'
import logoPlaceholder from '../../icon/LOGO.png'
import clsx from 'clsx'

interface Partner {
 name: string,
 logo: string,
}
const PARTNETS: Partner[] = [
 {
  name: 'Placeholder',
  logo: './image/kandkLogo.png'
 },
 {
  name: 'Placeholder',
  logo: './image/logo.png'
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
  const classes = clsx('sectionTitle', style.partnerTitle)
 return (
  <section className={style.partnersBox}>
   <div className="container">
    <h2 className={classes}>
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