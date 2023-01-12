import clsx from "clsx";
import React from "react";
import Link from "next/link";
import style from './areas.module.scss'
import pattern from '../../icon/bluer-pattern.png'


interface Catagory {
  id: string,
  title: string,
  href?: string
}

export const CATAGORY: Catagory[] = [
  {
    id: 'business',
    title: 'Business advisory',
    href: '/services/business/business-planning'
  },
  {
    id: 'accounting-audit',
    title: 'Accounting & Audit',
    href: '/services/accounting-audit/accounting'
  },
  {
    id: 'financial',
    title: 'Financial advisory',
    href: '/services/financial/aml-kyc-fraud'
  },
  {
    id: 'legal',
    title: 'Legal',
    href: '/services/legal/compliance-and-due-diligence'
  },
  {
    id: 'digital',
    title: 'Digital',
    href: '/services/digital/crypto-blockchain'
  },
]

type CategoryButtonType = {
  activeId: string,
} & Catagory

const CategoryButton = (props: CategoryButtonType) => {
  const classes = clsx(props.activeId === props.id && style.activeLink)
  return (
    <li className={classes}>
      <Link href={props.href ? props.href : `/services/${props.id}`}>
        <a>
          {props.title}
        </a>
      </Link>
    </li>
  )
}

export const CategoryNav = ({ activeId }: { activeId?: string }) => {
  return (
    <div className={style.areasHeader} >
      <div className={clsx('container', style.areasBox)}>
        <ul className={clsx(style.areasCatergory)}>
          {
            CATAGORY.map(cat => <CategoryButton key={cat.id} {...cat} activeId={activeId} />)
          }
        </ul>
      </div>
      <span className={style.bg}>
        <img src={pattern.src} />
      </span>
    </div >
  )
}