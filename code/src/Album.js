import React from 'react'
import data from './data.json'
import { ReactComponent as Heart } from './icons/heart.svg'
import { ReactComponent as Play } from './icons/play.svg'
import { ReactComponent as Dots } from './icons/dots.svg'
import './album.css'

console.log(data)

export const Album = (props) => (
  <div>
    <div className="Album-container" >
      <a className="Image" href={props.uri}> <img src={props.image} alt="Album cover"></img> </a>
      <a className="Album" href={props.uri}>{props.albumname}</a>
      <a className="Artist" href={props.artisturi}>{props.artistname}</a>

      <div className="icons-container">
        <div className="icon"><Heart /></div>
        <div className="icon"><Play /></div>
        <div className="icon"><Dots /></div>
      </div>
    </div>
  </div>
)

// export const Album = () => (
//   <div className="App">
//     {data.albums.items.map(album => {
//       return <div className="Album-container" key={album.id}>
//         <a className="Image" href={album.uri}> <img src={album.images[1].url} alt="Album cover"></img></a>
//         <a className="Album" href={album.uri}> {album.name}</a>
//         <a className="Artist" href={album.artists[0].uri}> {album.artists[0].name}</a>
//         <div className="icons">
//           <div className="heart-icon"><Heart /></div>
//           <div className="play-icon"><Play /></div>
//           <div className="dots-icon"><Dots /></div>
//         </div>
//       </div>
//     })}

//   </div>
// )


