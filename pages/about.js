import React from "react";
import AboutPage from '../src/components/AboutUs/AboutPage'
import { NavBar } from "../src/components/NavBar/NavBar";
import { BasicHead } from "../src/components/BasicHead";

export default function News({ news }) {
 return (
  <>
   <>
    <BasicHead />
    <main >
     <NavBar />
     <AboutPage news={news} />
    </main>
   </>
  </>
 )
}
