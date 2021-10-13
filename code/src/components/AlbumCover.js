import React from 'react'
import data from '../data.json'
import { ArtistName } from 'components/ArtistName'
import { Icons } from 'components/Icons'
import { AlbumName } from 'components/AlbumName'

console.log(data)

export const AlbumCover = () => {
  return data.albums.items.map(item => {
    return (
      <div key={item.name}>
        <div className='image-container'>
          <Icons />
          {/* <div className='overlay'> */}
          <img
            src={item.images[1].url}
            alt={'Album cover for: ' + item.name}
            style={{ margin: '5px', position: 'relative' }}
          />
          {/* </div> */}
        </div>
        <p className='album-name'>{item.name}</p> {/* ska länka till album url */}
        <p><ArtistName artists={item.artists} /></p> {/* länk till artist url */}
      </div>
    )
  })
}
