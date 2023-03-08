import React from 'react';

const Artist = (props) => {
  return (
    props.artists.map((artist) => {
      return (
        <h2 className="artistName">{artist.name}</h2>
      )
    })
  )
}

export default Artist;