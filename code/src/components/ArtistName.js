import React from 'react'
// import './ArtistName.css'

export const ArtistName = props => {
  return props.artists.map(artist => {
    return (
      <p className='artist-name' key={artist.name}>
        <a href={artist.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
          {artist.name}
        </a>
      </p>
    )
  })
}
