import React from 'react'
import data from '../data.json'
import { ArtistName } from 'components/ArtistName'
import { AlbumName } from 'components/AlbumName'
import { AlbumCover } from 'components/AlbumCover'
// import './AlbumCover.css'

// console.log(data)

export const AlbumWrapper = props =>
  data.albums.items
    .filter(item => item.album_type === props.type)
    .sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date))
    .map(item => (
      <div className='album-container' key={item.id}>
        <AlbumCover item={item} />
        <AlbumName item={item} />
        <ArtistName artists={item.artists} />
      </div>
    ))
