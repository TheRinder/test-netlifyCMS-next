import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { LinkedinIcon, TelegramIcon } from './icon'
import style from './about.module.scss'
import { Member } from "./AboutPage";




const Personel = (props: Member) => {
 const { avatar, name, position, socialLink } = props

 return (
  <div className={style.teamCard}>
   <div className={style.teamImgBox}>
    <img src={avatar} alt="" />
   </div>
   <div className={style.teamName}>
    <p>{name}</p>
   </div>
   <div className={style.teamProf}>
    <p>
     {position}
    </p>
   </div>
   <div className={style.teamLink}>
    <ul>
     {
      socialLink.map((l, i) => {
       if (l.type === 'linkedIn') {
        return (
         <li key={i}>
          <Link href={l.link}>
           <a target={'_blank'}>
            <LinkedinIcon />
           </a>
          </Link>
         </li>
        )
       } if (l.type === 'telegram') {
        return (
         <li key={i}>
          <Link href={l.link}>
           <a target={'_blank'}>
            <TelegramIcon />
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

export const OurTeam = ({ team }: { team: { member: Member }[] }) => {

 return (
  <section className={clsx(style.teamSection)}>
   <div className="container">

    <h2 className={'sectionTitle'}>
     Our Team
    </h2>
    <div className={style.teamBox}>
     {
      team.map((item, index) => <Personel key={index} {...item.member} />)
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