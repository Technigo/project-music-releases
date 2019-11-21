import React from 'react'
import data from './data.json'
import './app.css'
import { Header } from './components/Header'
import { Album } from './components/Album'


console.log(data)

//Get the data from API (data.albums.items is where every release info is)
//Using the id from API to uniqe key ID
//album={item} is getting all album info from comp Album 
//why does it have to say "album"? Beacause album is the name in the array?
//Which one is parent component and child component?

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="appContent">
        {data.albums.items.map(item => {
          return (
            <Album
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
    </div>
  )
}

// export const App = () => {
//   return (
//     <div className="app">
//       <div className="appHeadline">
//         <h1>New albums & singles</h1>
//       </div>
//       <div className="appAlbums">
//         {data.albums.items.map((item) => (

//           <Album key={item.id} image={item.images[1].url} name={item.name} />

//         ))}
//       </div>
//     </div>
//   )
// }


//WORKING 
// export const App = () => {
//   return (
//     <div className="app">
//       <div className="appHeadline">
//         <h1>New albums & singles</h1>
//       </div>
//       <div className="appAlbums">
//         {data.albums.items.map(item => {
//           return (
//             <Album key={item.id} album={item} />
//           )
//         })}
//       </div>
//     </div>
//   )
// }