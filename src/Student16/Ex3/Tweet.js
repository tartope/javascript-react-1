import React from 'react'
import './Tweet.css'


export const Tweet = ({message, color}) => {
    //Sets the div color className to each message
    let className = "Message";

    //Switch the color and compare
    switch (color) {
        //If the color === red, assign RedMessage to classname
        case "red":
            className = "RedMessage"
            break;
        case "yellow":
            className = "YellowMessage"
                break;
        case "green":
            className = "GreenMessage"
            break;
        default:
            break;
    }

    return (
        <div className="Tweet">
            {/* Set className to variable className */}
            <div className={className}>
                {/* Place message inside div dynamically */}
                { message }
            </div>
        </div>
    )
}