import React from 'react'
import './Menu.css'
import { Food } from './Food'
import { Drink } from './Drink'
import { Dessert } from './Dessert'

export const Menu = () => {
  return (
    <div className='menu'>
        <h1>Menu</h1>
        <Food />
        <Drink />
        <Dessert />
    </div>
  )
}
