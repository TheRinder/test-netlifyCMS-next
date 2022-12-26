import { useRouter } from 'next/router';
import style from './areas.module.scss'
import React from 'react'
import json from './post.json'
import Link from 'next/link';
import clsx from 'clsx';

type PostAsideType = {
 slug: string,
 title: string
}

const POST = json;

type PostAsideItemType = {
 active?: boolean,
} & PostAsideType

const PostAsideItem = React.memo((props: PostAsideItemType) => {
 const { categoryid } = useRouter().query
 const styleActive = clsx(props.active && style.activePost) 
 return (
  <li className={styleActive}>
   <Link href={`/areas/${categoryid}/${props.slug}`}>
    <a>
     {props.title}
    </a>
   </Link>
  </li>
 )
})

export const PostAside = () => {
 const { categoryid, slug } = useRouter().query

 const asidePost: PostAsideType[] = React.useMemo(() => {
  const arr = POST.filter(post => post.type === categoryid)[0]
  if (arr && arr.list && arr.list.length > 0) {
   return arr.list
  }
  return []
 }, [categoryid])

 return (
  <aside className={style.asideBox}>
   <ul>
    {
     asidePost.map(item => <PostAsideItem key={item.slug} {...item} active={item.slug === slug} />)
    }
   </ul>
  </aside>
 )
}