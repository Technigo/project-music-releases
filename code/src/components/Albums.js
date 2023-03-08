import React from 'react'
import data from '../data.json'
import { Card } from './Card'

export const Albums = () => {
  return (
    <div className="album-names">
      {data.albums.items.map((singleAlbumName) => (<Card props={singleAlbumName} />))}
    </div>
  )
}

