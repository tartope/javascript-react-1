import React from 'react'
import './Main.css'
import { Header } from './Header/Header'
import { Menu } from './Menu/Menu'
import { Footer } from './Footer/Footer'

export const Main = () => {
  return (
    <div className='main'>
        <Header />
        <Menu />
        <Footer />
    </div>
  )
}
