import React from 'react'
import { ChartIcon } from '../../icon/homeIcon'
import style from './home.module.scss'

interface Service {
 id: number,
 title: string,
 infoText: string
}

const SERVICES: Service[] = [
 {
  id: 0,
  title: 'Arbitration and Mediation',
  infoText: `Briefly talk about your firm's services here.`
 },
 {
  id: 1,
  title: 'Criminal Defense',
  infoText: `Briefly talk about your firm's services here.`
 },
 {
  id: 2,
  title: 'Family Law',
  infoText: `Briefly talk about your firm's services here.`
 },
 {
  id: 3,
  title: 'Immigration',
  infoText: `Briefly talk about your firm's services here.`
 },
 {
  id: 4,
  title: 'Personal Injury',
  infoText: `Briefly talk about your firm's services here.`
 },
 {
  id: 5,
  title: 'Tax and Estate Planning',
  infoText: `Briefly talk about your firm's services here.`
 },
]

const ServiceCard = (props: Service) => {
 const { infoText, title } = props
 return (
  <div className={style.serviceCard}>
   <div className={style.serviceCardIcon}>
    <ChartIcon />
   </div>
   <h3 className={style.serviceCardTitle}>{title}</h3>
   <p className={style.serviceCardText}>
    {infoText}
   </p>
  </div>
 )
}

export const ServiceSection = () => {
 return (
  <section className="container" id='#service'>
   <h2 className={'sectionTitle'} style={{ position: 'relative', zIndex: 5 }}>
    Full-service legal solutions
   </h2>
   <div className={style.serviceBox}>
    {
     SERVICES.map(item => <ServiceCard key={item.id} {...item} />)
    }
   </div>
  </section>
 )
}