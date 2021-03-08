import Album from 'components/Album'
import Artist from 'components/Artist'
import Image from 'components/Image'
import Test from 'components/Test'
import React from 'react'
import data from './data.json'

/*console.log(data.albums.items.artists[0].name)*/
console.log(data.albums.items[0].´[0].name)

export const App = () => {
  return (
    <div>
      {
        data.albums.items.map((albumObj) => {
          return <Album album={albumObj} />
        })
      }
      {
        data.albums.items.map((artistObj) => {
          return <Artist artistsOne={artistObj} />
        })
      }
    </div>
  

  )}

/*      data.albums.items.map((imageObj)=>{
      return  <Image image={imageObj} />
    }) */
