import React from 'react'

export const Artist = (props) => {
    console.log("artist props", props)
    return (
        <div> 
            <h1 className="artist-name">
                {props.artist}
            </h1>
            <div className="href">
                {props.href}
            </div>
        </div>   
    )
}