import React from 'react'
import { Album } from './Album'
import { Header } from './Header'
import data from './data.json'
console.log(data)


export const App = () => {
  return (
    <div>
      <div id="container">
        <Header />
        <section id="album-container">
          {data.albums.items.map((item) => {


            // // Since there can be multiple artists per album 
            // // I loop through the array artist and push the names into array = []
            let array = []
            for (let i = 0; i < item.artists.length; i++) {
              array.push(item.artists[i].name)
            }
            // // Using the join method to make a string with the artists divided by ", "
            let artistsList = array.join(", ")

            return <Album key={item.id} name={item.name} image={item.images[1].url} artists={artistsList} />
          })}
        </section>
      </div>
    </div>
  )
}