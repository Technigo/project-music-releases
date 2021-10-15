import React from 'react'
import Header from './components/Header'
import data from './data.json'
import data2 from './data2.json'
import Article from './components/Article'


console.log(data)
console.log(data.albums.items)
console.log(data2)


export const App = () => {
    // one line of code 
// return <div>heellooo</div>
  return (
    // react code - looks like html but it is only convenience for us. 
    // Is complex code behind.
    <div>
      {data.albums.items.map((album) => (
        <Article 
        // passing props
          img={album.images[1].url}
          title={album.name}
          artists={album.artists}
        />
        ))}
      {/* another way of doing it */}
      {/* <Article articleData={data} /> */}
    </div>
    //react code ends
  )
}
