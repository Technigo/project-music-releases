import React from 'react'
import Artist from './Artist'

const Album = (props) => {

return (
  <article>
    <div className="cover-container">
        <img className="cover-image" alt="Album cover" src={props.img} />
        <div className="icons-container">
            <img className="icon-heart" src="icons/heart.svg" alt="like-icon"/>
            <img className="icon-play" src="icons/play.svg" alt="play-icon"/>
            <img className="icon-dot" src="icons/dots.svg" alt="more-icon"/>
        </div>
    </div>
        <a href={props.albumurl} target="_blank" rel="noopener noreferrer">
            <p className="album-title">{props.album}</p>
        </a>
        <Artist 
        artists={props.artist} />
  </article> 

)
}

export default Album 