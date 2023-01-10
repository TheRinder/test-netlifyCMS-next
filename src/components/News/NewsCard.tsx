import { useRouter } from "next/router";
import React from "react";
import { CloseIcon } from "../../icon/homeIcon";
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

export const NewsCard = ({ slug }: { slug: string }) => {
 const router = useRouter();

 const openTest: boolean = React.useMemo(() => {
  if (router.query && router.query.post === slug) {
   return true
  }
  return false
 }, [router.query])

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
       #accounting
      </p>
      <p className={style.cardDate}>AUGust 13, 2021 </p>
     </div>
     <h3
      onClick={() => {
       onClickCard(slug)
      }}
      className={style.newsTitle}>
      Sed dolor orci, semper sit amet justo et, malesuada facilisis nisl.
     </h3>
     <p className={style.newsSubText}>Proin a purus lobortis, vulputate nulla non, dapibus nunc. Suspendisse ac diam at nunc posuere consectetur...</p>
    </div>
    <div className={style.newsCardImage} >
     <NewsImage source="" size="305x210" />
    </div>
   </div>
   {
    openTest &&
    <div>
     <p className={style.newsSubText}>
      Maecenas tempus neque vel velit eleifend commodo. Praesent a malesuada leo. Ut diam velit, varius id quam ut, lobortis mollis elit. Sed faucibus neque turpis, eget condimentum tellus cursus quis. Fusce in euismod nibh. Nunc vel ultricies enim. Quisque sit amet nunc dui. Maecenas vitae lectus lorem. Ut quam lorem, elementum id massa ac, fringilla posuere sapien. Duis accumsan lacus sed nulla facilisis, eu feugiat enim sagittis. Curabitur ac eros nibh. Nunc facilisis ligula quis ullamcorper consequat. Nullam laoreet egestas augue, et feugiat diam posuere ultricies. In eu diam scelerisque, gravida ipsum nec, fermentum purus. Sed aliquam ligula ultricies lacus ornare, ut vulputate libero ultrices. Nullam accumsan consequat pharetra. In hac habitasse platea dictumst. Sed ultricies sapien in dui gravida, ac sollicitudin nulla rhoncus. Cras lacinia lectus lectus, quis tincidunt quam blandit in. Integer iaculis euismod felis, ut lacinia ex hendrerit sit amet. Quisque faucibus feugiat libero, eget sodales velit consequat et. Donec non enim lectus. Aliquam erat volutpat. Maecenas sed dignissim turpis, dapibus aliquet libero. Nunc maximus, elit vel hendrerit suscipit, lectus dui consequat augue, sit amet sodales ante odio nec elit. Sed placerat, lorem vel dictum faucibus, purus leo placerat est, eget pretium erat nisl vel nibh. Proin a purus lobortis, vulputate nulla non, dapibus nunc. Suspendisse ac diam at nunc posuere consectetur. Pellentesque vel orci molestie, tempor mauris non, feugiat justo. Sed vehicula mattis malesuada. Pellentesque euismod laoreet neque, nec vehicula elit maximus quis. Cras at varius nisi. Aliquam auctor eleifend tortor, a consequat dui volutpat sit amet.
     </p>
    </div>
   }
   <div className={style.newsAuthorBox}>
    <NewsAuthor name="Th. Rinder" picture={undefined} />
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