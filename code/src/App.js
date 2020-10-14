import React from 'react'
import data from './data.json'
// import { Dots } from './components/Dots'
// import { Heart} from './components/Heart'
// import { Play } from './components/Play'
// import { Button } from './components/Button'
import { AlbumCard } from './components/AlbumCard'



console.log(data)

export const App = () => {
  return (

    <div>
      {/* <Dots /> */}
      {/* <Button /> */}
      <AlbumCard albums={data.albums.items}/>
      {/* <Heart />
      <Play />  */}
    </div>
  )
    }