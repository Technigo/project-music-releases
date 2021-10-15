import React from 'react'

export const Album = (props) => {
    return (
      <article className="album-card">
        <section className="cover">
  
          <a href={props.albumLink} target="_blank">
            <img src= {props.image} className="album-cover"/>
          </a>
  
          <a href={props.albumLink} target="_blank">
            <h2>{props.albumTitle}</h2>
          </a>
  
          <div className={`artists ${props.artists.length > 1 ? 'artist-list' : ''}`}> 
            {props.artists.map(artist => {
              return (
                <Artist
                  key={artist.id}
                  name={artist.name}
                  artistLink={artist.external_urls.spotify}
                />
              )
            })}
          </div>
        </section>
      </article>
    )
  }