import React from 'react'
import { NavBar } from '../src/components/NavBar/NavBar'
import { useRouter } from 'next/router'
import { attributes, react as HomeContent } from '../content/home.md'
import { CategoryPage } from '../src/components/Areas/CategoryPage'
import { BasicHead } from '../src/components/BasicHead'

export default function Areas() {
 const { locale, locales, defaultLocale } = useRouter();
 const { cats, title, lang } = attributes
 return (
  <>
  <BasicHead />
   <main >
    <NavBar />
    <CategoryPage />
   </main>
  </>
 )
}
