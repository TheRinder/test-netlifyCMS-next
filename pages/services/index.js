import React from 'react'
import { NavBar } from '../../src/components/NavBar/NavBar'
import { BasicHead } from '../../src/components/BasicHead'
import { CategoryPage } from '../../src/components/Areas/CategoryPage'
import { useRouter } from 'next/router'

export default function Services() {
 const router = useRouter()
 const { categoryid } = router.query
 return (
  <>
   <BasicHead />
   <main >
    <NavBar />
    <CategoryPage categoryId={categoryid} />
   </main>
  </>
 )
}
