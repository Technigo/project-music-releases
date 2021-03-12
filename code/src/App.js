import React from 'react'
import data from './data.json'
import Playlist from 'components/Playlist'
import Albumwrapper from 'components/Albumwrapper'
import Albumwrapper2 from 'components/Albumwrapper2'

console.log(data.albums.items[0].album_type)

export const App = () => {
  return (
    <main className="main">
        <h2>New Albums</h2>
      <article>
        <Playlist />
        <Albumwrapper albumWrap={data}/>
        <h2>New Singles</h2>
        <Albumwrapper2 albumWrap={data}/>
      </article>
    </main>
  )
}

