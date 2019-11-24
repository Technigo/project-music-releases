import React from 'react'
import {Artist} from './Artist'
import './album.css'
import './header.css'

export const Album = (props) => {
    console.log("props", props)
    return (
        <div className="albums">
            <div className="album-img">
                <a href={props.url}>
                <img className="img" src={props.image}/>
                </a>
                <div className="icons">
                    <img className="heart" src="icons/heart.svg" alt="heartIcon"/> 
                    <img className="play" src="icons/play.svg" alt="playIcon"/>
                    <img className="dots" src="icons/dots.svg" alt="dotsIcon"/> 
                </div> 
            </div>            
            <div className="album-title">
                {props.name}
            </div> 
            <div className="artist">
            {props.artists.map(artist => {   
                return <Artist name={artist.name} href={artist.href} />  
            })}
            
            </div>
        </div>   
    )
}


 