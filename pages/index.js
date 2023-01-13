import React from 'react'
import { BasicHead } from '../src/components/BasicHead'
import HomePage from '../src/components/Home/HomePage'
import { NavBar } from '../src/components/NavBar/NavBar'
import { attributes } from '../content/home.md'

export default function Home() {
  return (
    <>
      <BasicHead />
      <main >
        <NavBar />
        <HomePage {...attributes} />
      </main>
    </>
  )
}
