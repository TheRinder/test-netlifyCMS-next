import React, { useEffect } from 'react'
import { NewsCard } from './NewsCard'
import style from './news.module.scss';
import { News } from './NewsPage';

export const NewsListSection = ({ news }: { news: News[] }) => {

 const sortNews = React.useMemo(() => {
  const testSort = news.sort((a, b) => {
   const a_date = new Date(a.data.date)
   const b_date = new Date(b.data.date)
   return (b_date.getTime() - a_date.getTime());
  })
  return testSort
 }, [news])

 return (
  <section className={style.newsContainer}>
   {
    sortNews.map((item, index) => {
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