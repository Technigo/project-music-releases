import React from "react"

import { ReactComponent as Heart } from './Icons/Heart.svg';
import { ReactComponent as Play } from './Icons/Play.svg';
import { ReactComponent as Dot } from './Icons/Dots.svg';


{/* <div className="image-container">
        <a href={props.coverLink} target="_blank">
        <img src={props.image} alt="Album cover"/>
        </a>
      
      </div> */}


export const AlbumCard = props => {
  const { title, artists, image, coverLink} = props


  return (
    <article className="album-cards" > 
    <div className="image-container">
      <img src={props.image} alt="Album cover"/> 
      </div>
      <div className="icons">
                <Heart className="heart" />
                <Play className="play" />
                <Dot className="dot" />
          </div>

      <a href={props.albumLink} target="_blank">
         <h1>{title}</h1></a>
      {artists.map((artist, index)  => {
        return <div key={artist.name} index={index}>
         <a href={props.artistLink} target="_blank" >{artist.name}</a>
         </div>
      })}
    </article>
  )
}

// {props.artists.map((artist, index, artists) => {
//   return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} index={index} artists={artists} />
// })}

      
// {artists.map(artist => {
//   return <div key={artist.name}>
//    <a href={props.artistLink} target="_blank">{artist.name}</a>
//    </div>
// })}
// </article>
// )
// }