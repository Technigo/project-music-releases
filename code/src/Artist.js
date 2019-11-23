import React from 'react'
import './artist.css'

export const Artist = (props) => {
    console.log("artist props", props)


    return (
    <a className="artist-name" href={props.href}>{props.name}</a>
    )
}