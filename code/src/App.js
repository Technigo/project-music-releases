import React from 'react'
import data from './data.json'
/* import Artist from './components/Artists.js' */
import Album from './components/Album.js'

console.log(data)
/* console.log(artists) */

export const App = () => {
/*   const Artists = ;
  const imageSrc = 'https://via.placeholder.com/150'; */

  return (
    <>
        <header>
            <h1>New releases</h1>
        </header>
        <div>
            <Album album={data.albums.items}/>
           {/* <h3>{artist}</h3> */}
            <p>Spring is coming!</p>

        </div>
    </>
  )
}

export default App;
