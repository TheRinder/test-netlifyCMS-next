import React from 'react'
import { useRouter } from 'next/router'
import { NavBar } from '../../../src/components/NavBar/NavBar'
import { CategoryPage } from '../../../src/components/Areas/CategoryPage'
import { BasicHead } from '../../../src/components/BasicHead'
import dynamic from 'next/dynamic'

export default function Category() {
 const router = useRouter()
 const { categoryid, slug } = router.query

 const Post = dynamic(() =>
  import(`../../../content/services/${categoryid}/${slug}.md`).then((module) => module.react)
 )

 return (
  <>
   <BasicHead />
   <main >
    <NavBar />
    <CategoryPage categoryId={categoryid}>
     <Post />
    </CategoryPage>
   </main>
  </>
 )
}
