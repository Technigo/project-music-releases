import React from 'react'

export const Album = ({ image, albumlink, title, artistLink, artistName }) => {
  return (
    <section className="card">
      <div className="image-icon">
        <img className="album-image" src={image} alt="artist"></img>
      </div>
      <a href={albumlink}>
        <div className="title"> {title} </div>
      </a>
      <a href={artistLink}>
        <div className="artist"> {artistName.map((artist) => {
          return <span className="space" key={artist.id}> {artist.name} </span>
        }
        )} </div>
      </a>


    </section>
  )
}