import React from 'react'

export const ArtistName = props => {
  return props.artists.map(artist => {
    return <p className='artist-name' key={artist.name}>{artist.name}</p> 
  })

 /* länkt till artist items.artist.external_urls*/
  
}
