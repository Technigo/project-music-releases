import React from 'react'
import data from './data.json'
import {Album} from './components/Album'

console.log(data)

export const App = () => {
  return (
    <main className="main">
      <h1>New albums & singles</h1>

       {/* {data.map((album) => {
         return <Album key={album.limit} albumName={album.name} />;
       })} */}

       <Album albumName="lalaland" />
       <Album albumName={data.albums.limit} />

    </main>
  )
}
