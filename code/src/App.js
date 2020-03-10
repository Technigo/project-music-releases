import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Header } from './Header'
console.log(data)

export const App = () => {

  const items = data.albums.items


  return (
    <div>
      <Header />

      <div className="album-wrapper">

        {
          items.map(album => <Album data={album} />)
        }


      </div>
    </div>
  )
}





