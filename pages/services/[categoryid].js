import React from 'react'
import { useRouter } from 'next/router'
import { NavBar } from '../../src/components/NavBar/NavBar'
import { CategoryPage } from '../../src/components/Areas/CategoryPage'
import { BasicHead } from '../../src/components/BasicHead'

export default function Category() {
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
