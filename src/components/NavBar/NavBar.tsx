import React from 'react'
import Link from "next/link"
import { LogoIcon } from '../../icon/logo'
import scss from './navbar.module.scss'
import clsx from 'clsx'
const VisitorAPI = require("visitorapi");

import { LocationIcon } from '../../icon/headerIcon'
import { useRouter } from 'next/router'
import { usePageContext } from '../../context/state'

type NavLink = {
  subMenu?: ({ subMenu?: NavItem[] } & NavItem)[]
} & NavItem

interface NavItem {
  id: string,
  title: string,
  href: string,
  isActive?: boolean,
}

const NAV_LINKS: NavLink[] = [
  {
    id: 'services',
    title: 'Services',
    href: '/services/business/business-planning',
    subMenu: [
      {
        id: '',
        title: '',
        href: '',
        subMenu: [
          {
            id: '',
            title: '',
            href: '',
          }
        ]
      }
    ]
  },
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

const NavMenuMobile = ({ open, pathname, setOpen }: { setOpen: (boolean) => void, open: boolean, pathname: string }) => {
  return (
    <div className={clsx(scss.navMobile, open && scss.openNavMobile)}>
      <nav className={scss.navMobileBox}>
        <ul>
          {
            NAV_LINKS.map((link, i) =>
              <NavLink
                {...link}
                key={link.id}
                isActive={pathname.split('/')[1] === link.id}
              />
            )
          }
        </ul>
      </nav>
      <div className={scss.navMobileBtnClose}>
        <button onClick={() => { setOpen(false) }}>
          Cancel
        </button>
      </div>
    </div>
  )
}

const MenuIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 5.9998C3.59998 5.68154 3.7264 5.37632 3.95145 5.15128C4.17649 4.92623 4.48172 4.7998 4.79998 4.7998H19.2C19.5182 4.7998 19.8235 4.92623 20.0485 5.15128C20.2735 5.37632 20.4 5.68154 20.4 5.9998C20.4 6.31806 20.2735 6.62329 20.0485 6.84833C19.8235 7.07338 19.5182 7.1998 19.2 7.1998H4.79998C4.48172 7.1998 4.17649 7.07338 3.95145 6.84833C3.7264 6.62329 3.59998 6.31806 3.59998 5.9998ZM3.59998 11.9998C3.59998 11.6815 3.7264 11.3763 3.95145 11.1513C4.17649 10.9262 4.48172 10.7998 4.79998 10.7998H12C12.3182 10.7998 12.6235 10.9262 12.8485 11.1513C13.0735 11.3763 13.2 11.6815 13.2 11.9998C13.2 12.3181 13.0735 12.6233 12.8485 12.8483C12.6235 13.0734 12.3182 13.1998 12 13.1998H4.79998C4.48172 13.1998 4.17649 13.0734 3.95145 12.8483C3.7264 12.6233 3.59998 12.3181 3.59998 11.9998ZM3.59998 17.9998C3.59998 17.6815 3.7264 17.3763 3.95145 17.1513C4.17649 16.9262 4.48172 16.7998 4.79998 16.7998H19.2C19.5182 16.7998 19.8235 16.9262 20.0485 17.1513C20.2735 17.3763 20.4 17.6815 20.4 17.9998C20.4 18.3181 20.2735 18.6233 20.0485 18.8483C19.8235 19.0734 19.5182 19.1998 19.2 19.1998H4.79998C4.48172 19.1998 4.17649 19.0734 3.95145 18.8483C3.7264 18.6233 3.59998 18.3181 3.59998 17.9998Z" fill="#7854F7" />
    </svg>
  )
}

export const NavBar = () => {
  const { setGCountry, country } = usePageContext()

  const styleComponent = clsx('container', scss.headerContainer)
  const { locale, pathname } = useRouter()
  const [openMenu, setOpenMenu] = React.useState<boolean>(false)

  const menuOnChange = () => {
    setOpenMenu(!openMenu)
  }

  const testJson = async () => {
    try {
      const req = await fetch('https://ipinfo.io/json/?token=a826e80bbf58f7'
        , {
          method: 'GET',
          headers: {
            "Accept": "applications/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer a826e80bbf58f7"
          },
        }
      );
      if (req.status !== 404) {
        const data = await req.json()
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    testJson()
  }, [])
  // React.useEffect(() => {
  //   if (country.length === 0) {
  //     VisitorAPI(
  //       "SDSL2GEyDIbjsiv2nfCO",
  //       data => {
  //         setGCountry(data.countryName)
  //       }
  //     );
  //   }
  // }, [])

  return (
    <header className={scss.header}>
      <div className={styleComponent}>
        <div className={scss.logoBox}>
          <div className={scss.mobileBtn}>
            <button onClick={() => {
              menuOnChange()
            }}>
              <MenuIcon />
            </button>
          </div>
          <Link href={'/'} scroll={true}>
            <a className={scss.logoColor}>
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
      <NavMenuMobile open={openMenu} pathname={pathname} setOpen={setOpenMenu} />
    </header>
  )
}