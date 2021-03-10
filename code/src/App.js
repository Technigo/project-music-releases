import React from 'react'
import data from './data.json'
import { Album } from './components/Album'

console.log(data.albums.items)

export const App = () => {
  return (
    <div>
      <div className="main-title">
        <h1>New albums &#38; singles</h1>
      </div>

      <div className="album-cards-container">
        <div>
        {data.albums.items.map((item) => {
          return (
            <Album 
            key={item.id}
            images={item.images}
            albumName={item.name}
            artists={item.artists}
            />
          )
        }
        )}
        </div>
      </div>
    </div>
  )
}