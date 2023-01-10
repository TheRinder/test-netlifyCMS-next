import React from 'react'
import { NewsCard } from './NewsCard'

import style from './news.module.scss';

export const NewsListSection = () => {
 return (
  <section className={style.newsContainer}>
   {
    new Array(5).fill('').map((_, index) => {
     return <NewsCard key={index} />
    })
   }
  </section>
 )
}