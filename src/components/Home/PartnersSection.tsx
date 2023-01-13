import React from 'react'
import style from './home.module.scss'
import logoPlaceholder from '../../icon/LOGO.png'
import clsx from 'clsx'
import { Partner } from './HomePage'




const PartnerCard = (props: Partner) => {
  const { description, logo } = props
  const imgUrl = logo.length === 0 ? logoPlaceholder.src : logo
  return (
    <div className={style.partnerItem}>
      <img src={imgUrl} alt={description} />
    </div>
  )
}

export const PartnersSection = ({ partners }: { partners: Partner[] }) => {
  const classes = clsx('sectionTitle', style.partnerTitle)
  return (
    <section className={style.partnersBox}>
      <div className="container">
        <h2 className={classes}>
          Our Partners
        </h2>
        <div className={style.partnersGrid}>
          {
            partners.map((item, i) => <PartnerCard key={i} {...item} />)
          }
        </div>
      </div>
    </section>
  )
}