import React from 'react'
import data from './data.json'
import Playlist from 'components/Playlist'
import Albumwrapper from 'components/Albumwrapper'
import Albumwrapper2 from 'components/Albumwrapper'

export const App = () => {
  return (
    <main className="main">
        <h2>New Albums & Singles</h2>
      <article>
        <Playlist />
        <Albumwrapper albumWrap={data}/>
        <h2>Singles</h2>
        <Albumwrapper2 albumWrap={data}/>
      </article>
    </main>
  )
}

