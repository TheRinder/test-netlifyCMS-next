import React from "react";
import { Author } from "../Home/TestimonialsSection";
import style from './news.module.scss';



const NewsImage = ({ source, size }: { source?: string, size: string }) => {
 const imgUrl = source ? source : `https://via.placeholder.com/${size}`
 return (
  <img src={imgUrl} alt="" />
 )
}

const NewsAuthor = (props: Author) => {
 const { name, picture } = props
 return (
  <div className={style.newsAuthor}>
   <div className={style.newsAuthorBoxImage}>
    <NewsImage source={picture} size='44' />
   </div>
   <p className={style.newsAuthorName}>
    {name}
   </p>
  </div>
 )
}

export const NewsCard = () => {
 return (
  <div className={style.newsCard}>
   <div className={style.newsTypography}>
    <div className={style.newsCardHeader}>
     <p className={style.cardTag}>#accounting</p>
     <p className={style.cardDate}>AUGust 13, 2021 </p>
    </div>
    <h3 className={style.newsTitle}>Sed dolor orci, semper sit amet justo et, malesuada facilisis nisl.</h3>
    <p className={style.newsSubText}>Proin a purus lobortis, vulputate nulla non, dapibus nunc. Suspendisse ac diam at nunc posuere consectetur...</p>
    <NewsAuthor name={'Th. Rinder'} picture={undefined} />
   </div>
   <div className={style.newsCardImage} >
    <NewsImage source="" size="305x210" />
   </div>
  </div>
 )
}