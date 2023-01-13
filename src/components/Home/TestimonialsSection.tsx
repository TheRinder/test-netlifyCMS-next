import clsx from 'clsx'
import { Author } from '../News/NewsPage'
import { Testimonials } from './HomePage'
import Slider from 'react-slick'
import style from './home.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CirconsImage = ({ source }: { source?: string }) => {
  const imgUrl = source ? source : 'https://via.placeholder.com/150'
  return (
    <img src={imgUrl} alt="" />
  )
}

const AuthorAvatar = (props: Author) => {
  const { name, avatar } = props
  return (
    <div className={style.testimonialCardAuthor}>
      <div className={style.testimonialAuthorImgBox}>
        <CirconsImage source={avatar} />
      </div>
      <p className={style.testimonialAuthorName}>
        {name}
      </p>
    </div>
  )
}

const TestimonialCard = (props: Testimonials) => {
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
const SampleNextArrow = (props) => {
  const { style, onClick } = props
  return (
    <button
      className={'myArrowSlick myArrowNext'}
      style={{ ...style, display: 'block', }}
      onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#7854F7" />
      </svg>

    </button>
  )
}

const SamplePrevArrow = (props) => {
  const { style, onClick } = props
  return (
    <button
      className={'myArrowSlick myArrowPrev'}
      style={{ ...style, display: 'block', }}
      onClick={onClick}>
      <svg style={{ transform: 'rotateY(180deg)' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#7854F7" />
      </svg>
    </button>
  )
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

export const TestimonialsSection = ({ testimonials }: { testimonials: Testimonials[] }) => {
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
          <Slider
            {...settings}
          >
            {
              testimonials.map((item, index) => <TestimonialCard key={index} {...item} />)
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}