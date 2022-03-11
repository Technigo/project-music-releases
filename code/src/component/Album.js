import React from 'react'

import heart from '../icons/heart.svg'
import dots from '../icons/dots.svg'
import play from '../icons/play.svg'

import Artist from './Artist' 

const Album = (props) => {
    return (
        <article className="album-card">
            <div className="image-container">
                <a href={props.item.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer">
                <img className="album-img" src={props.item.images[1].url} alt="album cover"/>
                <div className="icon-container">
                    <img className="icon" src={heart} alt="heart-icon"/>
                    <img className="play-icon" src={play} alt="play-icon"/>
                    <img className="icon" src={dots} alt="dots-icon"/>
                </div>
                </a>
            </div>
            <div className="text-wrapper">
                <a href={props.item.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer">
                <h3 className="album-title">{props.item.name}</h3></a>
                <Artist artistArray={props.item.artists} />
            </div>
        </article>  
    )
}

export default Album 




      

