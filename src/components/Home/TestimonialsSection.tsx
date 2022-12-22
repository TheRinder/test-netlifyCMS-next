// import style from './home.module.scss'
// import Image from 'next/image'

// interface Testimonial {
//  id: number,
//  author: any,
//  text: string,
// }

// const COMMENT: Testimonial[] = [
//  {
//   id: 0,
//   author: {
//    name: 'Connor Hamilton',
//   },
//   text: `Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.`
//  },
//  {
//   id: 1,
//   author: {
//    name: 'Anna Morys',
//   },
//   text: `Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.`
//  },
//  {
//   id: 2,
//   author: {
//    name: 'John Mann',
//   },
//   text: `Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.`
//  }
// ]

// const AuthorAvatar = (props: Author) => {
//  const { name, picture } = props
//  return (
//   <div className={style.testimonialCardAuthor}>
//    <div className={style.testimonialAuthorImgBox}>
//     <Image
//      src={
//       picture?.asset?._ref
//        ? urlForImage(picture).height(44).width(44).fit('crop').url()
//        : 'https://source.unsplash.com/96x96/?face'
//      }
//      className={style.testimonialAuthorImg}
//      height={44}
//      width={44}
//      // @TODO add alternative text to avatar image schema
//      alt={name}
//     />
//    </div>
//    <p className={style.testimonialAuthorName}>
//     {name}
//    </p>
//   </div>
//  )
// }

// const TestimonialCard = (props: Testimonial) => {
//  const {
//   author,
//   text
//  } = props
//  return (
//   <div className={style.testimonialCard}>
//    <AuthorAvatar {...author} />
//    <div className={style.testimonialCardText}>
//     <p>{text}</p>
//    </div>
//   </div>
//  )
// }

// export const TestimonialsSection = () => {
//  return (
//   <section className={style.testimonialBox}>
//    <div className="container">
//     <h2 className={'sectionTitle'} style={{ textAlign: 'left' }}>
//      Testimonials
//     </h2>
//     <p className={style.testimonialSubText}>
//      What our clients say about us:
//     </p>
//     <div className={style.commentBox}>
//      {
//       COMMENT.map(item => <TestimonialCard key={item.id} {...item} />)
//      }
//     </div>
//    </div>
//   </section>
//  )
// }