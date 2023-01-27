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
  InstagramIcon,
  FigureForm,
  RingIconForm,
  LinkedIcon
} from '../../icon/homeIcon'
import { Form, Field } from "react-final-form";
import Link from "next/link";


const access_key = "a506489c-3de3-4827-aea0-86ecc0eacaa7"
// const access_key_test = "4827a253-b76b-4170-9126-43dbca96cce1"

const Notif = ({ tag }: { tag: boolean }) => {
  return (
    <div className={clsx(style.notif, tag && style.activeNotif)}>
      <p className={style.notifText}>
        form submit - done
      </p>
    </div>
  )
}

const ContactForm = ({ onNotif }: { onNotif: () => void }) => {
  // const { country } = usePageContext()

  const initialValue = React.useMemo(() => {
    return {
      name: '',
      phone: '',
      email: '',
      country: '',
      comment: ''
    }
  }, [])

  const onSubmitForm = async (event) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: access_key, ...event }),
    });
    const result = await response.json();
    if (result.success) {
      onNotif()
    }
  }


  return (
    <Form
      onSubmit={onSubmitForm}
      initialValues={{ ...initialValue }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={style.formContainer}>
            <div className={style.formInput}>
              <Field name='name' component={"input"} type="text" placeholder="Name" />
            </div>
            <div className={style.formInput}>
              <Field name='phone' component={"input"} type="text" placeholder="Phone" />
            </div>
            <div className={style.formInput}>
              <Field name='email' component={"input"} type="email" placeholder="E-mail" />
            </div>
            <div className={style.formInput}>
              <Field name='country' component={"input"} type="text" placeholder="Country" />
            </div>
            <div className={style.formInput}>
              <Field name="comment" component={"textarea"} placeholder="Tell us how we could help you" />
            </div>
            <div className={style.formBtn}>
              <button type="submit" onSubmit={handleSubmit}>
                Send
              </button>
            </div>
          </div>
        </form>
      )}
    />
  )
}

export const ContactSection = () => {

  const [notif, setNotif] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (notif) {
      const timer = setTimeout(() => {
        setNotif(false)
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [notif]);

  return (
    <section className={style.formSection} id={'contact'}>
      <div className={"container"}>
        <div className={style.contactBox}>
          <h2 className={'sectionTitle'} style={{ color: '#fff', position: 'relative', zIndex: '3' }}>
            Contact Form
          </h2>
          <div className={style.flexContant}>
            <ContactForm onNotif={() => { setNotif(true) }} />
            <div className={style.contactInfoBox}>
              <div className={style.contactInfoLine}>
                <p>
                  <CallIcon />
                </p>
                <p>
                  <Link href={"tel:+37258164161"}>
                    <a >
                      +372 58164161
                    </a>
                  </Link>

                  <br />
                  whatsapp / viber / telegram
                </p>
              </div>
              <div className={style.contactInfoLine}>
                <p>
                  <HomeIcon />
                </p>
                <p>
                  Mon-Fri 9:00 - 18:00<br />
                  Liikuri tn 7-4, 13618, Tallinn, Estonia
                </p>
              </div>
              <div className={style.contactInfoLine}>
                <p>
                  <SendIcon />
                </p>
                <p>
                  <Link href={"mailto:circons@circonsgroup.com"}>
                    <a >
                      circons@circonsgroup.com
                    </a>
                  </Link>
                </p>
              </div>
              <div className={style.contactSocialLine}>
                <ul>
                  <li>
                    <Link href="https://www.linkedin.com/company/circon-s-group/">
                      <a target={'_blank'}>
                        <LinkedIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/CirconsGroup">
                      <a target={'_blank'} >
                        <TwitterIcon />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/profile.php?id=100087190113113">
                      <a target={'_blank'}>
                        <FacebookIcon />
                      </a>
                    </Link>

                  </li>
                  <li>
                    <Link href="https://instagram.com/circonsgroup?igshid=NTdlMDg3MTY=">
                      <a target={'_blank'}>
                        <InstagramIcon />
                      </a>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <span className={style.whyBg}>
            <img src={pattern.src} alt="" style={{ borderRadius: 20, opacity: 0.52 }} />
          </span>
          <span className={style.formRingIcon}>
            <RingIconForm />
          </span>
        </div>
      </div>
      <span className={style.formFigure}>
        <FigureForm />
      </span>
      <Notif tag={notif} />
    </section >
  )
}