import React from 'react'
import { NewsCard } from './NewsCard'
import { getAllPostIds } from '../../../lib/news'
import style from './news.module.scss';

export const NewsListSection = ({ postData }) => {
 console.log(postData);

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

// export async function getStaticPaths() {
//  const paths = getAllPostIds();
//  return {
//   paths,
//   fallback: false,
//  };
// }

export async function getStaticProps() {
 const postData = getAllPostIds();
 return {
  props: {
   postData,
  },
 };
}