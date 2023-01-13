import React from 'react'
import style from './news.module.scss'
import pattern from '../../icon/bluer-pattern.png'

import { NewsListSection } from "./NewsListSection";

export interface Author {
  name: string
  avatar: string,
}

export interface News {
  data: {
    date: string,
    subText: string,
    tag: string,
    thumbnail: string
    title: string,
    Author: Author
  },
  content: string
}

const NewsBanner = () => {

  return (
    <section className={style.ourNewsBanner}>
      <div className="container">
        <div style={{ position: 'relative', zIndex: 3 }}>
          <h2 className={'sectionTitle'} style={{ color: '#fff', fontWeight: 400, fontSize: '55px', lineHeight: '70px' }}>
            Our News
          </h2>
          <div className={style.ourNewsText}>
            <p>The circular consulting model is a new-way approach of providing consulting services.</p>
          </div>
        </div>
      </div>
      <span className={style.bg}>
        <img src={pattern.src} style={{ opacity: 0.52 }} />
      </span>
    </section>
  )
}

export default function NewsPage({ news }: { news: News[] }) {
  return (
    <main>
      <NewsBanner />
      <NewsListSection news={news} />
    </main>
  )
}