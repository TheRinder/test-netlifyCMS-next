import React from "react";
import AboutPage from '../src/components/AboutUs/AboutPage'
import { NavBar } from "../src/components/NavBar/NavBar";
import { BasicHead } from "../src/components/BasicHead";
import { attributes } from '../content/about.md'

export default function News() {
 // console.log(attributes);

 return (
  <>
   <>
    <BasicHead />
    <main >
     <NavBar />
     <AboutPage {...attributes} />
    </main>
   </>
  </>
 )
}
