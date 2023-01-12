import React from 'react'
import Link from "next/link"
import { LogoIcon } from '../../icon/logo'
import scss from './navbar.module.scss'
import clsx from 'clsx'
const VisitorAPI = require("visitorapi");

import { LocationIcon } from '../../icon/headerIcon'
import { useRouter } from 'next/router'


interface NavLink {
  id: string,
  title: string,
  href: string,
  isActive?: boolean,
}

const NavLink = (props: NavLink) => {
  const { title, href } = props
  const styleLink = clsx('navBarLink', props.isActive && 'active')
  return (
    <li>
      <Link href={href} scroll={true}>
        <a className={styleLink} >{title}</a>
      </Link>
    </li>
  )
}

const IconAndButton = ({ text, Icon }: { text: string, Icon: React.FunctionComponent }) => {

  return (
    <div className={scss.locationBox}>
      <Icon />
      <p className={scss.locationText}>{text}</p>
    </div>
  )
}

const NAV_LINKS: NavLink[] = [
  {
    id: 'services',
    title: 'Services',
    href: '/services/business/business-planning'
  },
  // {
  //   id: 'areas',
  //   title: "Areas",
  //   href: "/areas/"
  // },
  {
    id: 'about',
    title: 'About Us',
    href: '/about'
  },
  {
    id: 'news',
    title: 'News',
    href: '/news'
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/#contact'
  },
]


export const NavBar = () => {
  const styleComponent = clsx('container', scss.headerContainer)
  const { locale, pathname } = useRouter()
  const [country, setCountry] = React.useState<string>("")

  React.useEffect(() => {
    if (country.length === 0) {
      VisitorAPI(
        "SDSL2GEyDIbjsiv2nfCO",
        data => {
          setCountry(data.countryName);
        }
      );
    }
  }, [])

  return (
    <header className={scss.header}>
      <div className={styleComponent}>
        <div>
          <Link href={'/'} scroll={true}>
            <a>
              <LogoIcon />
            </a>
          </Link>
        </div>
        <nav className={scss.navBox}>
          <ul>
            {
              NAV_LINKS.map((link, i) => <NavLink key={link.id} {...link} isActive={pathname.split('/')[1] === link.id} />)
            }
          </ul>
        </nav>
        <div >
          {
            country.length !== 0 &&
            <IconAndButton text={country} Icon={LocationIcon} />
          }
          {/* <IconAndButton text={locale} Icon={LangIcon} /> */}
        </div>
      </div>
    </header>
  )
}