import React, { useEffect } from "react";
import NewsPage from '../../src/components/News/NewsPage'
import { NavBar } from "../../src/components/NavBar/NavBar";
import { BasicHead } from "../../src/components/BasicHead";
import { getAllNews } from '../../lib/news'

export async function getServerSideProps(context) {
 const allNews = await getAllNews();
 return {
  props: {
   news: JSON.parse(allNews)
  },
 }
}

export default function News({ news }) {
 return (
  <>
   <>
    <BasicHead title="Circon's - news" />
    <main >
     <NavBar />
     <NewsPage news={news} />
    </main>
   </>
  </>
 )
}
