import { useRouter } from 'next/router'
import React from 'react'
import { ChartIcon } from '../../icon/homeIcon'
import style from './home.module.scss'

interface Service {
 id: number,
 title: string,
 infoText: string,
 link?: string
}

const SERVICES: Service[] = [
 {
  id: 0,
  title: 'Business advisory',
  infoText: `Briefly talk about your firm's services here.`,
  link: '/services/business/business-planning'
 },
 {
  id: 1,
  title: 'Accounting & audit',
  infoText: `Briefly talk about your firm's services here.`,
  link: '/services/accounting-audit/accounting'
 },
 {
  id: 2,
  title: 'Financial advisory',
  infoText: `Briefly talk about your firm's services here.`,
  link: '/services/financial/aml-kyc-fraud'
 },
 {
  id: 3,
  title: 'Legal',
  infoText: `Briefly talk about your firm's services here.`,
  link: '/services/legal/compliance-and-due-diligence'
 },
 {
  id: 4,
  title: 'Digital',
  infoText: `Briefly talk about your firm's services here.`,
  link: '/services/digital/ensuring-stable-growth-of-digital-projects-and-tools'
 },
 {
  id: 5,
  title: 'Crypto',
  infoText: `Briefly talk about your firm's services here.`,
  link: '/services/digital/crypto-blockchain'
 },
]

const ServiceCard = (props: Service) => {
 const { infoText, title } = props
 const router = useRouter()

 const onClick = () => {
  router.push(props.link)
 }

 return (
  <div className={style.serviceCard} onClick={() => { onClick() }}>
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