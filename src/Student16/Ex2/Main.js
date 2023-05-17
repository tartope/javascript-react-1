import React from 'react'
import './Main.css'
import { Header } from './Header'
import { Nav } from './Nav'
import { Body } from './Body'
import { Footer } from './Footer'

export const Main = () => {
  return (
    <div className='main'>
      <Header />
      <Nav />
      <Body />
      <Footer />
    </div>
  )
}
