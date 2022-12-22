import React from 'react'
import Link from "next/link"
import { LogoIcon } from '../../icon/logo'
import scss from './navbar.module.scss'
import clsx from 'clsx'

import { LangIcon, LocationIcon } from '../../icon/headerIcon'
import { useRouter } from 'next/router'


interface NavLink {
  title: string,
  href: string,
  isActive?: boolean,
}

const NavLink = (props: NavLink) => {
  const { title, href } = props
  const styleLink = clsx('navBarLink', props.isActive && 'active')
  return (
    <li>
      <Link href={href}>
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
    title: "Areas",
    href: "areas"
  },
  {
    title: 'Services',
    href: '#'
  },
  {
    title: 'Team',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'News',
    href: 'news'
  },
  {
    title: 'Contact',
    href: '#'
  },
]


export const NavBar = () => {
  const styleComponent = clsx('container', scss.headerContainer)
  const { locale, pathname } = useRouter()

  return (
    <header className={scss.header}>
      <div className={styleComponent}>
        <div>
          <Link href={'/'}>
            <a>
              <LogoIcon />
            </a>
          </Link>
        </div>
        <nav className={scss.navBox}>
          <ul>
            {
              NAV_LINKS.map((link, i) => <NavLink key={i} {...link} isActive={pathname.replace(/[^a-zа-яё0-9\s]/gi, '') === link.href} />)
            }
          </ul>
        </nav>
        <div className={scss.locationBox}>
          {/* <IconAndButton text="Estonia" Icon={LocationIcon} />
          <IconAndButton text={locale} Icon={LangIcon} /> */}
        </div>
      </div>
    </header>
  )
}