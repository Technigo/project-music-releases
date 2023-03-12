import React from 'react'
import data from '../data.json'
import { Card } from './Card'

export const Map = () => {
  return (
    <section className="album-section">
      {data.albums.items.map((singleAlbumName) => (
        <Card key={singleAlbumName.id} props={singleAlbumName} />))}
    </section>
  )
}

