import React from 'react'
import './Body.css'

export const Body = () => {
  return (
    <div className='body'>
      <div className='posts'>
        <h2>Posts</h2>
        <p>6/8/2022 Hello World!!!</p>
        <p>6/9/2022 I think therefore I am.</p>
        <p>6/12/2022 I need to retire.</p>
      </div>
      
      <div className='groups'>
        <h2>Groups</h2>
        <p>Likes: 12 Cats</p>
        <p>Likes: 2 Dogs </p>
        <p>Likes: 0 Good Neighbors</p>
      </div>
    </div>
  )
}
