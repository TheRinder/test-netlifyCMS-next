import React from "react";
import NewsPage from '../src/components/News/NewsPage'
import { NavBar } from "../src/components/NavBar/NavBar";
import { BasicHead } from "../src/components/BasicHead";

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