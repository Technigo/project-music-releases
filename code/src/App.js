import React from 'react'
import data from './data.json'
import {Album} from './components/Album'

console.log(data)

export const App = () => {
  return (
    <main className="main">
      <h1>New albums & singles</h1>

       {data.albums.map((album) => {
         return <Album key={album.items.type} albumName={album.items.name} img={album.items.images[1].url}  />;
       })}

       {/* <Album 
       albumImg={data.albums.items[0].images[1].url}
       albumName={data.albums.items[0].name} 
        /> */}
        


    </main>
  )
}
