import React from 'react';

const Artist = (artists) => {
  return (
    artists.items.artists.map(() => {
      return <p>{artists.name}</p>
    })

  )
}

export default Artist;