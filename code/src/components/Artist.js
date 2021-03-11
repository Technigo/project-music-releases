import React from 'react'


const Artist = ({ artistcontainer, albumlink }) => {
  return (
    <a 
    className="artist-name"
    href={albumlink}
    rel="noopener noreferrer"
    key={artistcontainer.id} 
    >
      <>{artistcontainer.map(artist => {
          return (
            <p className="artist" key={artist.id}>{artist.name}</p>
          )
        })}
      </>
    </a>
  )
}

export default Artist