import React from 'react'
import { NewsCard } from './NewsCard'
import { listNews } from '../../../lib/news'
import style from './news.module.scss';

export const NewsListSection = () => {
 console.log(listNews);
 return (
  <section className={style.newsContainer}>
   {
    new Array(5).fill('').map((_, index) => {
     return <NewsCard
      key={index}
      slug={`${index}`}
     />
    })
   }
  </section>
 )
}