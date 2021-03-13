import React from 'react'
import data from './data.json'
/* import Artist from './components/Artists.js' */
import Album from './components/Album.js'


console.log(data)
/* console.log(artists) */

export const App = () => {

  return (
    <>
        <header>
            <h1>New releases</h1>
        </header>
        <div>
            <Album album={data.albums.items}/>
        </div>
    </>
  )
  
}

export default App;
