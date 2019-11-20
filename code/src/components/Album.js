import React from 'react'
import dots from 'components/dots.svg'
import heart from 'components/heart.svg'
import play from 'components/play.svg'

export const Album = (props) => {
  return (
    <article className="album">
      <a href={props.albumUrl} className="album-link">
        <div class="album-cover">
          <img src={heart} alt="heart" className="heart-icon" />
          <img src={play} alt="Play" className="play-icon" />
          <img src={dots} alt="dots" className="dots-icon" />
          <img src={props.image} alt="" className="album-art" />
        </div>
        <h2 className="album-title">{props.name}</h2 >
      </a>
      {props.children}
    </article>
  )
}