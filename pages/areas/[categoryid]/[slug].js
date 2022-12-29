import React from 'react'
import { useRouter } from 'next/router'
import { NavBar } from '../../../src/components/NavBar/NavBar'
import { CategoryPage } from '../../../src/components/Areas/CategoryPage'
import { BasicHead } from '../../../src/components/BasicHead'
// import { getAllPostIds, getPostData } from '../../../lib/areas'
import dynamic from 'next/dynamic'

export default function Category() {
 const router = useRouter()
 const { categoryid, slug } = router.query

 const Post = dynamic(() =>
  import(`../../../content/blog/${categoryid}/${slug}.md`).then((module) => module.react)
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

// export async function getStaticPaths(props) {
//  console.log(props);
//  const paths = getAllPostIds('business')
//  return {
//   paths,
//   fallback: false
//  }
// }

// export async function getStaticProps({ params }) {
//  const postData = getPostData(params.slug)
//  return {
//   props: {
//    postData
//   }
//  }
// }