import React from 'react'

import { Album } from 'components/Album'
import data from './data.json'

console.log(data)
const albums = data.albums.items
console.log(albums)
// albums.map()

export const App = () => {
  return (<section>
    
    <Album 
    img={albums[0].images[1].url}
    title={data.albums.items[0].name}
    artist={data.albums.items[0].artists[0].name}
    />
  </section>
    // <article className="article"> 
    //   <h2>Hello Technigo!</h2>
    //   <p>some text</p>
    //   <p>date </p>
    //   <img src="https://www.placecage.com/200/300" alt="nicolas"/>
    // <div className="tag-container">
    //   <span className="tag">programming</span>
    //   <span className="tag">react</span>
    //   <span className="tag">learning</span>
    // </div>
    // </article>
  )
}
