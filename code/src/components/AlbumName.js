import React from 'react'

export const AlbumName = props => {
  return props.albums.items.map(item => {
    return <p key={item.name}>{item.name}</p> /* className för namn för style */
  })

/*external url*/
}