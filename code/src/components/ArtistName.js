import React from 'react'

export const ArtistName = props => {
  return props.artists.map(artist => {
    return <p key={artist.name}>{artist.name}</p> /* className för artistnamn för style */
  })
}
