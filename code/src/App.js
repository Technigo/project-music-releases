import React from 'react'
import data from './data.json'
import {Album} from './Album'
import {Artist} from './Artist'

console.log(data)




export const App = () => { 
  return (
   
  <div className="parent">
   
      {data.albums.items.map(item => {   
        return <Album
        key={item.id}
        image={item.images[1].url}
        name={item.name}
        artist={item.artists[0].name}
        href={item.artists[0].href}
        />
      })};
      
      </div>  
    
  
  )
}
