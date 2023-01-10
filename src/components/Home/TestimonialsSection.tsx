import clsx from 'clsx'
import style from './home.module.scss'

export interface Author {
  name: string,
  picture: string,
}

interface Testimonial {
  id: number,
  author: any,
  text: string,
}

const CirconsImage = ({ source }: { source?: string }) => {
  const imgUrl = source ? source : 'https://via.placeholder.com/150'
  return (
    <img src={imgUrl} alt="" />
  )
}

const COMMENT: Testimonial[] = [
  {
    id: 0,
    author: {
      name: 'Connor Hamilton',
    },
    text: `Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.`
  },
  {
    id: 1,
    author: {
      name: 'Anna Morys',
    },
    text: `Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.`
  },
  {
    id: 2,
    author: {
      name: 'John Mann',
    },
    text: `Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.`
  }
]

const AuthorAvatar = (props: Author) => {
  const { name, picture } = props
  return (
    <div className={style.testimonialCardAuthor}>
      <div className={style.testimonialAuthorImgBox}>
        <CirconsImage source={picture} />
      </div>
      <p className={style.testimonialAuthorName}>
        {name}
      </p>
    </div>
  )
}

const TestimonialCard = (props: Testimonial) => {
  const {
    author,
    text
  } = props
  return (
    <div className={style.testimonialCard}>
      <AuthorAvatar {...author} />
      <div className={style.testimonialCardText}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export const TestimonialsSection = () => {
  const classes = clsx('sectionTitle', style.testimonialTitle)
  return (
    <section className={style.testimonialBox}>
      <div className="container">
        <h2 className={classes}>
          Testimonials
        </h2>
        <p className={style.testimonialSubText}>
          What our clients say about us:
        </p>
        <div className={style.commentBox}>
          {
            COMMENT.map(item => <TestimonialCard key={item.id} {...item} />)
          }
        </div>
      </div>
    </section>
  )
}