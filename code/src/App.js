import React from 'react'
import data from './data.json'
import Playlist from 'components/Playlist'
import Albumwrapper from 'components/Albumwrapper'
import NewSingles from 'components/NewSingles'

export const App = () => {
  return (
    <main className="main">
        <h2>New Albums</h2>
      <article>
        <Playlist />
        <Albumwrapper albumWrap={data}/>
        <h2 className="single">New Singles</h2>
        <NewSingles albumWrap={data}/> 
      </article>
    </main>
  )
}

