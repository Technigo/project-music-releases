/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import React from 'react'
import ArtistName from './ArtistName'
import AlbumName from './AlbumName'

const AlbumCard = ({ album }) => {
  console.log('album:')
  console.log(album)
  return (
    <section>
      <img
        src={album.images[1].url}
        className="cover-img"
        alt={album.name} />
      <AlbumName title={album.name} />
      <ArtistName artists={album.artists} />
    </section>
  )
}

export default AlbumCard
