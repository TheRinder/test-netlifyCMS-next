import React from 'react'
import { BasicHead } from '../src/components/BasicHead'
import HomePage from '../src/components/Home/HomePage'
import { NavBar } from '../src/components/NavBar/NavBar'

export default function Home() {
  return (
    <>
      <BasicHead />
      <main >
        <NavBar />
        <HomePage />
      </main>
    </>
  )
}
