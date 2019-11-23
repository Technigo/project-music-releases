import React from 'react'
import data from './data.json'
import {Album} from './Album'


console.log(data)




export const App = () => { 
  return (
   
  <div className="albumContainer">
    <div className="albumsBackground">
   
      {data.albums.items.map(item => {   
        return <Album
        key={item.id}
        image={item.images[1].url}
        name={item.name}
        artists={item.artists}
        />
      })};
      </div>
      </div>  
    
  
  )
}
