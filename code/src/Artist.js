import React from 'react'
import data from './data.json'


export const Artist = () => {
  return (
    <div>
      {data.albums.items.map(item => 
      <div>
        {item.artists.map(artist => {
        return <div key={artist.id}>{artist.name}</div> 
        })} 
      </div>)}
    </div>
  )
}
