import React from 'react'
import Artist from './Artist'

const Album = (props) => {
return (

  <article>
    <div className="cover-container">
        <img className="cover-image" alt="Album cover" src={props.img} />
        <div className="icons-container">
            <img className="icon-heart" src="icons/heart.svg" alt="Like icon" />
            <img className="icon-play" src="icons/play.svg" alt="Play icon" />
            <img className="icon-dot" src="icons/dots.svg" alt="More icon" />
        </div>
    </div>
    <a href={props.albumurl} target="_blank" rel="noopener noreferrer"> 
    {/* Essentially, adding rel="noopener noreferrer" to links protects your site's users against having the site you've linked to potentially hijacking the browser (via rogue JS). */}
        <p className="album-title">{props.album}</p>
    </a>
        <Artist 
            artists={props.artist} /> 
  </article> 
)
}
export default Album