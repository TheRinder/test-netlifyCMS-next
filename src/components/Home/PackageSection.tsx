import React from 'react'
import { ReactNode } from 'react'
import style from './home.module.scss'
import {
 BasicIcon,
 CheckIcon,
 AdvancedIcon,
 AdvancedProIcon
} from '../../icon/PackagesIcon'
import clsx from 'clsx'
import { useRouter } from 'next/router'


interface Package {
 id: number,
 label: string,
 advantages: string[]
 subText: string,
 price: number,
 icon: ReactNode
}


const PACKAGE: Package[] = [
 {
  id: 0,
  label: "Circon Basic",
  advantages: [
   'Incorporation of LTD',
   'Accounting',
   'Contact person and address'
  ],
  subText: '+30 EUR montly',
  price: 290,
  icon: <BasicIcon />
 },
 {
  id: 1,
  label: "Circon Advanced",
  advantages: [
   'Incorporation of LTD',
   'Accounting',
   'Contact person and address',
   'Bank account',
   'Consulting'
  ],
  subText: '+30 EUR montly',
  price: 450,
  icon: <AdvancedIcon />
 },
 {
  id: 2,
  label: "Circon Advanced Pro",
  advantages: [
   'Incorporation of LTD',
   'Accounting',
   'Contact person and address',
   'Bank account',
   'Consulting',
   'Licenses'
  ],
  subText: '+30 EUR montly',
  price: 790,
  icon: <AdvancedProIcon />
 },
]

type PackageCardProps = {
 onClick: () => void;
} & Package

const PackageCard = (props: PackageCardProps) => {
 const { label,
  advantages,
  subText,
  onClick,
  price,
  icon } = props
 return (
  <div className={style.packageCard}>
   <div className={style.mobilePackageTitle}>
    <div className={style.packageCardIcon}>
     {icon}
    </div>
    <p className={style.packageCardLabel}>{label}</p>
    <p className={style.packageCardPrice}>{price} <span>EUR</span></p>
    <p className={style.packageCardSub}>{subText}</p>
   </div>
   <div>
    <div className={style.packageCardAdvantages}>
     <ul>
      {
       advantages.map((item, index) => <li key={index}><span><CheckIcon /></span>{item}</li>)
      }
     </ul>
    </div>
    <div className={style.packageCardBtnBox}>
     <button onClick={() => { onClick() }}>
      Get started
     </button>
    </div>
   </div>
  </div>
 )
}

export const PackageSection = () => {
 const classes = clsx("container", style.packageContainer)
 const router = useRouter()
 const onClick = () => {
  router.push('/#contact', undefined, { scroll: true })
 }
 return (
  <section className={classes}>
   <h2 className={'sectionTitle'}>
    Packages
   </h2>
   <div className={style.packageBox}>
    {
     PACKAGE.map(item => <div key={item.id}>
      <PackageCard {...item} onClick={onClick} />
     </div>
     )
    }
   </div>
  </section>
 )
}