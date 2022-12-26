import clsx from "clsx";
import React from "react";
import Link from "next/link";
import style from './areas.module.scss'

interface Catagory {
 id: string,
 title: string
}

const CATAGORY: Catagory[] = [
 {
  id: 'business',
  title: 'Business advisory'
 },
 {
  id: 'accounting&audit',
  title: 'Accounting & Audit'
 },
 {
  id: 'financial',
  title: 'Financial advisory'
 },
 {
  id: 'legalisation',
  title: 'Legalisation'
 },
 {
  id: 'cryptocurrency',
  title: 'Cryptocurrency'
 },
]

type CategoryButtonType = {
 activeId: string,
} & Catagory

const CategoryButton = React.memo((props: CategoryButtonType) => {
 const classes = clsx(props.activeId === props.id && style.activeLink)
 return (
  <li className={classes}>
   <Link href={`/areas/${props.id}`}>
    <a>
     {props.title}
    </a>
   </Link>
  </li>
 )
})

export const CategoryNav = ({ activeId }: { activeId?: string }) => {
 return (
  <div className={""} >
   <div>
    <ul className={clsx(style.areasCatergory, 'container')}>
     {
      CATAGORY.map(cat => <CategoryButton key={cat.id} {...cat} activeId={activeId} />)
     }
    </ul>
   </div>
  </div >
 )
}