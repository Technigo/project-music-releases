import React from 'react'
import { Album } from './Album'

export const Albums = (props) => {
  return (
    <div className="albums-container">
      {props.data.albums.items.filter((item) => item.album_type === props.filter).map((items) => {
        return (
          <Album key={items.id} album={items} />
        )
      })}
    </div>
  )
}