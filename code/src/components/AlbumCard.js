import React from 'react'
import ArtistName from './ArtistName'
import AlbumName from './AlbumName'

const AlbumCard = (props) => {
  return (
    <section>
      <img
        src={props.data.images[1].url}
        className="cover-img"
        alt={props.data.name} />
      <AlbumName />
      <ArtistName />
    </section>
  )
}

export default AlbumCard
