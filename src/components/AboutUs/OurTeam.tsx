import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { LinkedinIcon, TelegramIcon } from './icon'
import style from './about.module.scss'
import { type } from "os";

interface Person {
 image?: string,
 name: string;
 profession: string,
 link:
 {
  type: 'telegram' | 'linked',
  link: string
 }[]
}

const PERSONEL: Person[] = [
 {
  name: "Andrei Sribny",
  image: './image/andrei.jpg',
  profession: "Co-Founder and Finance/Audit Department Head",
  link: [
   {
    type: 'telegram',
    link: ''
   },
   {
    type: 'linked',
    link: 'https://ee.linkedin.com/in/andrei-sribny-18a506251'
   }
  ]
 },
 {
  name: "Igor Penkov",
  image: './image/igor.png',
  profession: "Co-Founder and Legal Department Head",
  link: [
   {
    type: 'telegram',
    link: ''
   },
   {
    type: 'linked',
    link: 'https://www.linkedin.com/in/igor-penkov-181138195/'
   }
  ]
 },
 {
  name: "Georgi Aksjonov",
  image: './image/georgi.jpg',
  profession: "Business consulting and Legal Department Head",
  link: [
   {
    type: 'telegram',
    link: ''
   },
   {
    type: 'linked',
    link: 'https://www.linkedin.com/in/gaksjonov/'
   }
  ]
 }
]

const Personel = (props: Person) => {
 const { image, name, profession, link } = props
 return (
  <div className={style.teamCard}>
   <div className={style.teamImgBox}>
    <img src={image} alt="" />
   </div>
   <div className={style.teamName}>
    <p>{name}</p>
   </div>
   <div className={style.teamProf}>
    <p>
     {profession}
    </p>
   </div>
   <div className={style.teamLink}>
    <ul>
     {
      link.map((l, i) => {
       if (l.type === 'linked') {
        return (
         <li key={i}>
          <Link href={l.link}>
           <a target={'_blank'}>
            {/* {
            l.type === 'telegram' && <TelegramIcon />
           } */}
            {
             l.type === 'linked' && <LinkedinIcon />
            }
           </a>
          </Link>
         </li>
        )
       } else {
        return null
       }
      }
      )
     }
    </ul>
   </div>
  </div>
 )
}

export const OurTeam = () => {
 return (
  <section className={clsx(style.teamSection)}>
   <div className="container">

    <h2 className={'sectionTitle'}>
     Our Team
    </h2>
    <div className={style.teamBox}>
     {
      PERSONEL.map((item, index) => <Personel key={index} {...item} />)
     }
    </div>
    <div className={style.teamPostText}>
     <p>
      Circon’s Group was formed based on the desires of the founders, who have come a long, practical way in building business processes, organization and relationships in the territory of international relations and trade. Circon’s is Estonian capital based consulting company, established in 2022 and now operating across two Baltic markets – Estonia and Latvia.
     </p>
    </div>
   </div>
  </section>
 )
}