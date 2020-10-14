import React from 'react'
import data from './data.json'
// import { Dots } from './components/Dots'
// import { Heart} from './components/Heart'
// import { Play } from './components/Play'
import { AlbumContainer } from './components/AlbumContainer'
import { AlbumCard } from './components/AlbumCard'

console.log(data)

export const App = () => {
  return (

    <div className="AlbumContainer">
      {/* <Dots /> */}
      <AlbumContainer albums={data.albums.items}/>

      {/* <Heart />
      <Play />  */}
    </div>
  )
    }