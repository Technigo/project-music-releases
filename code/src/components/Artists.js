import React from 'react'

const Artists = (props) => {
  return props.artists.map((artist) => {
    const isLastArtist = props.artists.indexOf(artist) === props.artists.length - 1;
    return (
      <a href={artist.external_urls.spotify} key={artist.id}>
        { isLastArtist ? 
          <h5 className="artist-name"> {artist.name} </h5>
          :
          <h5 className="artist-name"> {artist.name}{", "}</h5>
        } 
      </a>
    )
  })
}

export default Artists