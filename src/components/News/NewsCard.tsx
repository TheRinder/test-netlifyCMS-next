import { useRouter } from "next/router";
import React from "react";
import { CloseIcon } from "../../icon/homeIcon";
// import { Author } from "../Home/TestimonialsSection";
import style from './news.module.scss';
import { Author, News } from "./NewsPage";

const MONTH = [
 "January",
 'February',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December',
]

const NewsImage = ({ source, size }: { source?: string, size: string }) => {
 const imgUrl = source ? source : `https://via.placeholder.com/${size}`
 return (
  <img src={imgUrl} alt="" />
 )
}

const NewsAuthor = (props: Author) => {
 const { name, avatar } = props
 return (
  <div className={style.newsAuthor}>
   <div className={style.newsAuthorBoxImage}>
    <NewsImage source={avatar} size='44' />
   </div>
   <p className={style.newsAuthorName}>
    {name}
   </p>
  </div>
 )
}

export const NewsCard = ({ slug, news }: { slug: string, news: News }) => {
 const router = useRouter();

 const { data, content } = news

 const openTest: boolean = React.useMemo(() => {
  if (router.query && router.query.post === slug) {
   return true
  }
  return false
 }, [router.query])

 const ParseDate = (d: string) => {
  const date = new Date(d);
  return `${MONTH[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
 }

 const onClickCard = (link: string) => {
  router.push(`?post=${link}`, undefined, { scroll: false })
 }

 const onClose = () => {
  router.push(`?post=`, undefined, { scroll: false })
 }

 return (
  <div className={style.newsCard}>
   <div className={style.newsCardLow}>
    <div className={style.newsTypography}>
     <div className={style.newsCardHeader}>
      <p className={style.cardTag}>
       {data.tag}
      </p>
      <p className={style.cardDate}>{ParseDate(data.date)} </p>
     </div>
     <h3
      onClick={() => {
       onClickCard(slug)
      }}
      className={style.newsTitle}>
      {data.title}
     </h3>
     <p className={style.newsSubText}>{data.subText}</p>
    </div>
    <div className={style.newsCardImage} >
     <NewsImage source={data.thumbnail} size="305x210" />
    </div>
   </div>
   {
    openTest &&
    <div>
     <p className={style.newsSubText}>
      {content}
     </p>
    </div>
   }
   <div className={style.newsAuthorBox}>
    <NewsAuthor name={data.Author.name} avatar={data.Author.avatar} />
    {
     openTest &&
     <button
      onClick={() => {
       onClose()
      }}>
      <CloseIcon />
     </button>
    }
   </div>
  </div>
 )
}