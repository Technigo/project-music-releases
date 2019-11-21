import React from 'react'

export const Album = (props) => {
  return (
    <article className="album">
      <a href={props.url} className="album-link">
        <div className="album-cover">
          <img src={props.image} alt="" className="album-cover-image" />
          <div class="album-options">
            <img src="/heart.svg" alt="Add to favourites" className="favourite-icon icon" />
            <img src="/play.svg" alt="Play album" className="play-icon icon" />
            <img src="/dots.svg" alt="More" className="more-icon icon" />
          </div>
        </div>
        <h2 className="album-title custom-underline">{props.name}</h2 >
      </a>
      {props.children}
    </article>
  )
}