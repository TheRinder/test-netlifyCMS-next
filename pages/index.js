import React from 'react'
import { BasicHead } from '../src/components/BasicHead'
import HomePage from '../src/components/Home/HomePage'
import { NavBar } from '../src/components/NavBar/NavBar'
import { useRouter } from 'next/router'
import { attributes, react as HomeContent } from '../content/home.md'

export default function Home() {
  const { locale, locales, defaultLocale } = useRouter();
  const { cats, title, lang } = attributes
  return (
    <>
      <BasicHead />
      <main >
        <NavBar />
        <HomePage />
      </main>
    </>
  )
}
