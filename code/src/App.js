import React from 'react'

import { Album } from 'components/Album'
import { Header } from 'components/Header'
import data from './data.json'

console.log(data)
const albums = data.albums.items
console.log(albums)
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 0.1
      }}
  />
);
// albums.map()

export const App = () => {
  return (<section className='container'>
    {/* <h1>New albums and singles</h1> */}
    <Header />
    <ColoredLine 
    color="#a0a0a0" />
    <div className='flex-container'>
      {albums.map((album) => 
        <Album
          album = {album}
        />
      )}
    
    </div>
  </section>
    
  )
}

// const ColoredLine = ({ color }) => (
//   <hr
//       style={{
//           color: color,
//           backgroundColor: color,
//           height: 5
//       }}
//   />
// );
/* <ColoredLine color="red" /> */