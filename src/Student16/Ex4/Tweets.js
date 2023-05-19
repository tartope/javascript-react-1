import React from 'react'
import { useState } from 'react'
import { Tweet } from './Tweet'

import './Tweets.css'

export const Tweets = () => {
    let [counter, setCounter] = useState(0)

    const onHandleLike = (likes) => {
        if (likes === "green") {
        setCounter (++counter)
        }
        else if (likes === "yellow"){
        setCounter (++counter)
        }
        else {
        setCounter (++counter)
        }
    }

  return (
    <div className="Tweets">
        <div>Total Likes: {counter} </div>
        <Tweet message="It's payday!!!" color="green" onHandleLike={onHandleLike}/>
        <Tweet message="I just bought a new car!" color="yellow" onHandleLike={onHandleLike}/>
        <Tweet message="I just smashed my new car." color="red" onHandleLike={onHandleLike}/>
    </div>
  )
}
