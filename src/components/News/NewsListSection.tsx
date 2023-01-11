import React, { useEffect } from 'react'
import { NewsCard } from './NewsCard'
import style from './news.module.scss';
import { News } from './NewsPage';

export const NewsListSection = ({ news }: { news: News[] }) => {

 return (
  <section className={style.newsContainer}>
   {
    news.map((item, index) => {
     return <NewsCard
      key={index}
      slug={`${index}`}
      news={item}
     />
    })
   }
  </section>
 )
}