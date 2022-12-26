import clsx from "clsx";
import React from "react";
import style from './home.module.scss'
import pattern from '../../icon/bluer-pattern.png'
import {
 CallIcon,
 SendIcon,
 HomeIcon,
 TwitterIcon,
 FacebookIcon,
 InstagramIcon
} from '../../icon/homeIcon'

export const ContactSection = () => {
 return (
  <section style={{ marginBottom: 39 }}>
   <div className={"container"}>
    <div className={style.contactBox}>
     <h2 className={'sectionTitle'} style={{ color: '#fff', position: 'relative', zIndex: '3' }}>
      Contact Form
     </h2>
     <div className={style.flexContant}>
      <div className={style.formContainer}>
       <div className={style.formInput}>
        <input type="text" placeholder="Name" />
       </div>
       <div className={style.formInput}>
        <input type="text" placeholder="Phone" />
       </div>
       <div className={style.formInput}>
        <input type="text" placeholder="Mail" />
       </div>
       <div className={style.formInput}>
        <input type="text" placeholder="Country" />
       </div>
       <div className={style.formInput}>
        <textarea name="comment" placeholder="Text" />
       </div>
       <div className={style.formBtn}>
        <button type="submit">
         Send
        </button>
       </div>
      </div>
      <div className={style.contactInfoBox}>
       <div className={style.contactInfoLine}>
        <p>
         <CallIcon />
        </p>
        <p>
         +372 58164161  <br />
         whatsapp / viber / telegram
        </p>
       </div>
       <div className={style.contactInfoLine}>
        <p>
         <HomeIcon />
        </p>
        <p>
         Mon-Fri 9:00 - 18:00<br />
         Ahtri 8-202, Tallinn, Estonia
        </p>
       </div>
       <div className={style.contactInfoLine}>
        <p>
         <SendIcon />
        </p>
        <p>
         circons@circonsgroup.com
        </p>
       </div>
       <div className={style.contactSocialLine}>
        <ul>
         <li><TwitterIcon /></li>
         <li><FacebookIcon /></li>
         <li><InstagramIcon /></li>
        </ul>
       </div>
      </div>
     </div>
     <span className={style.whyBg}>
      <img src={pattern.src} alt="" style={{ borderRadius: 20, opacity: 0.52 }} />
     </span>
    </div>
   </div>
  </section>
 )
}