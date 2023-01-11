import React, { useEffect } from "react";
import NewsPage from '../src/components/News/NewsPage'
import { NavBar } from "../src/components/NavBar/NavBar";
import { BasicHead } from "../src/components/BasicHead";
import { getAllPostIds } from '../lib/news'

// export const getStaticProps = async () => {
//  const paths = await getAllPostIds();

//  const data = await paths;

//  if(!data){
//   return{
//    notFound
//   }
//  }
// }

export default function News() {
 return (
  <>
   <>
    <BasicHead />
    <main >
     <NavBar />
     <NewsPage />
    </main>
   </>
  </>
 )
}

// export async function getStaticPaths() {
//  const paths = getAllPostIds();
//  return {
//   paths,
//   fallback: false,
//  };
// }