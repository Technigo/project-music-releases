import React from 'react'

const Artist = (props) => {

  return (
    <>
        <div className='artist-container'>
        {props.item.artists.map((artist,key) =>
        <div className='artist-name' key={artist.id}>
           <a className="artist-link" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {artist.name}
        </a>
        </div>
        )}
        </div>
    </>
  )
}

export default Artist