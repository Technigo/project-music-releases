import React from 'react'
import './album.css'
import { Artist } from './Artist'

//Mapping data.albums.items in App.js 
//Comp Album continues at .item.xxx using props as prefix (item could be changed to anything, as long as I give same name in key=item.id in App.js)
//Mapping the artists array with comp Artist

export const Album = (props) => {
  // console.log(props)
  return (
    <div className="albumCards">
      <div className="coverWrapper">
        <img src={props.item.images[1].url} alt="album cover" className="albumCover" />
        <div className="albumIcons">
          <img src="/icons/heart.svg" alt="heart" className="iconHeart" />
          <img src="/icons/play.svg" alt="play" className="iconPlay" />
          <img src="/icons/dots.svg" alt="dots" className="iconDots" />
        </div>
      </div>
      <div><a className="albumTitle" href={props.item.external_urls.spotify}>{props.item.name}</a></div>

      <div className="artist">
        {props.item.artists.map(item => {
          return (
            <Artist key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}



//WORKING COMPONENT
// export const Album = (props) => {
//   console.log(props)
//   return (
//     <div className="albumCards">
//       <div className="coverWrapper">
//         <img src={props.item.images[1].url} alt="album cover" className="albumCover" />
//         <div className="albumIcons">
//           <img src="/icons/heart.svg" alt="heart" className="iconHeart" />
//           <img src="/icons/play.svg" alt="play" className="iconPlay" />
//           <img src="/icons/dots.svg" alt="dots" className="iconDots" />
//         </div>
//       </div>
//       <div><a className="albumTitle" href={props.item.external_urls.spotify}>{props.item.name}</a></div>
//       <div><a className="artistTitle" href={props.item.artists[0].external_urls.spotify}>{props.item.artists[0].name}</a></div>

//     </div>
//   )
// }


//WORKING TOO - BUT NEEDS KEY FOR ARTIST
// export const Album = (props) => {
//   console.log(props)
//   return (
//     <div className="albumCards">
//       <div className="coverWrapper">
//         <img src={props.item.images[1].url} alt="album cover" className="albumCover" />
//         <div className="albumIcons">
//           <img src="/icons/heart.svg" alt="heart" className="iconHeart" />
//           <img src="/icons/play.svg" alt="play" className="iconPlay" />
//           <img src="/icons/dots.svg" alt="dots" className="iconDots" />
//         </div>
//       </div>
//       <div><a className="albumTitle" href={props.item.external_urls.spotify}>{props.item.name}</a></div>
//       <div className="artist">
//         {props.item.artists.map(item => {
//           return (
//             <div><a className="artistTitle" href={item.external_urls.spotify}>{item.name}</a></div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }