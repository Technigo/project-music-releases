import React from "react"
import { ReactComponent as Heart } from 'icons/heart.svg'
import { ReactComponent as Play } from 'icons/play.svg'
import { ReactComponent as Dots } from 'icons/dots.svg'
import 'Albumcovers.css'

export const Images = (props) => (
  <div className="album-cover">
    <img src={props.image} alt="Album cover" />
    <div className="icons">
      <div className="heart-icon"><Heart /></div>
      <div className="play-icon"><Play /></div>
      <div className="dots-icon"><Dots /></div>
    </div>
  </div>

)

// {
//   return (
//     <div>
//       {data.albums.items.map((album) => {
//         return <div key={album.images[1].url}> <img src={album.images[1].url} alt='Album cover'></img></div>
//       })}
//     </div>
//   )
// }