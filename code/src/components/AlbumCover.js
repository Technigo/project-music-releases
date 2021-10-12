import React from 'react'
import data from '../data.json'
import { ArtistName } from 'components/ArtistName'
import { Icons } from 'components/Icons'

console.log(data)

export const AlbumCover = () => {
  return data.albums.items.map(item => {
    return (
      <div key={item.name}>
        <div className='image-container'>
          <Icons />
          <img
            src={item.images[1].url}
            alt={'Album cover for: ' + item.name}
            style={{ margin: '5px', position: 'relative' }}
          />
        </div>
        <p>{item.name}</p> {/* ska länka till album url */}
        <ArtistName artists={item.artists} /> {/* länk till artist url */}
      </div>
    )
  })
}
