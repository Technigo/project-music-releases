import React from 'react'


export const Album = ({ image, albumlink, title, artistLink, artistName }) => {
  return (
    <article className="card">

      <div>
        <img className="album-image" src={image} alt="artist"></img>
      </div>
      <div className="icons">
        <div className="heart"><img src="heart.svg" alt="heart icon" /></div>
        <div className="play"><img src="play.svg" alt="play icon" /></div>
        <div className="dots"><img src="dots.svg" alt="dots icon" /></div>
      </div>

      <a className="title" href={albumlink}>{title}</a>

      <a href={artistLink}>
        <div className="artist" > {artistName.map((artist) => {
          return <space className="name" key={artist.id}> {artist.name} </space>
        }
        )} </div>
      </a>
    </article>
  )
}