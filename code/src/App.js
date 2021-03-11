import React from 'react'
import Album from 'components/Album'
import Playlist from 'components/Playlist'

export const App = () => {
  return (
    <main className="main">
        <h2>New Albums & Singles</h2>
        
      <article>
        <Playlist />
        <Album/>
      </article>
    </main>
  )
}

