import React from 'react'
import { Icons } from 'components/Icons'

export const AlbumCover = props => (
  <div className='image-container'>
    <Icons />
    <img
      src={props.item.images[1].url}
      alt={'Album cover for: ' + props.item.name}
      className='album-image'
    />
  </div>
)
