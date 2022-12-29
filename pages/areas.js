import React from 'react'
import { NavBar } from '../src/components/NavBar/NavBar'
import { CategoryPage } from '../src/components/Areas/CategoryPage'
import { BasicHead } from '../src/components/BasicHead'

export default function Areas() {
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
