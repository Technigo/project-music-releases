import React from "react"
import './album.css'


export const Album = (props) => {
    // console.log('props', props)
    console.log(props.artists)
    
    return (
    <div className="album">
    <h1>{props.name}</h1>
    <img src={props.image} alt="artist" />
    {props.artists.map(artist => (
        <p>{artist.name}</p>
    ))}
    
    
    </div>
    )
};