import React from 'react'
import data from '../data.json'
import { ArtistName } from 'components/ArtistName'
import { AlbumName } from 'components/AlbumName'
import { AlbumCover } from 'components/AlbumCover'
// import './AlbumCover.css'

console.log(data)

export const AlbumWrapper = props => {
  return data.albums.items
    .filter(item => item.album_type === props.type)
    .map(item => {
      return (
        <div className='album-container' key={item.name}>
          <AlbumCover item={item} />
          <AlbumName item={item} />
          <ArtistName artists={item.artists} />
        </div>
      )
    })
}
