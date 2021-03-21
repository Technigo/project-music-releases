import React from 'react'

import data from './data.json'
import Album from './components/Album.js'

export const App = () => {
  return (
    <>
      <header>
        <h1>New releases</h1>
      </header>
      <div className="cards">
          <Album album={data.albums.items}/>
      </div>
    </>
  )
}

export default App;
