import React from 'react'
import data from '../data.json'
import { ArtistName } from 'components/ArtistName'
import { Icons } from 'components/Icons'
import { AlbumName } from 'components/AlbumName'
// import './AlbumCover.css'

console.log(data)

export const AlbumCover = () => {
  return data.albums.items.map(item => {
    return (
      <div className='album-container' key={item.name}>
        <div className='image-container'>
          <Icons />
          <img
            src={item.images[1].url}
            alt={'Album cover for: ' + item.name}
            className='album-image'
          />
        </div>
        <AlbumName name={item.name} /> {/* ska länka till album url */}
        <ArtistName artists={item.artists} /> {/* länk till artist url */}
      </div>
    )
  })
}
