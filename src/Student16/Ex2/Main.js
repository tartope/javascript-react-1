import React from 'react'
import './Main.css'
import { Header } from './Header'
import { Nav } from './Nav'
import { Body } from './Body'

export const Main = () => {
  return (
    <div className='main'>
      <Header />
      <Nav />
      <Body />
    </div>
  )
}
