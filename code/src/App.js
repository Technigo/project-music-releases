import React from 'react'
import data from './data.json'
import AlbumCard from "./components/AlbumCard"
import Header from "./components/Header"


export const App = () => {
  console.log(data.albums.items[1].images[0])
  console.log(data.albums.items[0].name)
  console.log(data.albums.items[0].artists[0].name)
  
  
  return (
    
   <div className="site-container">
     <Header />
   
   <section className= "grid-for-album">
   {data.albums.items.map((item)=> {
     return <AlbumCard 
      img = {item.images[1].url}
      song={item.name} 
      artist = {item.artists[0].name}
      key = {item.name} 
      />
      
    })}
    </section> 
   </div>
  
  )

}

