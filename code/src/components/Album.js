import React from 'react'

export const Album = (props) => {
  return (
    <article className="album">
      <a href={props.url} className="album-link">
        <div className="album-cover">
          <img src={props.image} alt="" className="album-cover-image" />
          <div className="album-options">
            <img src="icons/heart.svg" alt="Add to favourites" className="favourite-icon icon" />
            <img src="icons/play.svg" alt="Play album" className="play-icon icon" />
            <img src="icons/dots.svg" alt="More" className="more-icon icon" />
          </div>
        </div>
        <h2 className="album-title custom-underline">{props.name}</h2 >
      </a>
      {props.children}
    </article>
  )
}