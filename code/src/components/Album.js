import React from 'react'
import './album_style.css'
import { Icons } from './Icons'
// import { ArtistArray } from './Artist'
// import data from '../data.json'

// Album card
export const Album = (props) => {
  // console.log(props.title)
  // console.log(props.name)
  // console.log('inside props:', props)
  // console.log(props)

  return (
    <article className="Card">
      <div className="album-container">
        <div className="album-wrapper">
          <img className="album-image" src={props.image} alt="Album artwork"></img>
          <Icons />
        </div>
        <div>
          <a className="song-title" href={props.linkAlbum}> {props.title} </a>
        </div>
        <div>
          <a className="artist-name" href={props.linkArtist}> {props.name} </a>
        </div>

{/*         <div>
        {data.albums.items.map((album) => {
          console.log(album)
          return ( 
          <ArtistArray key={album.artists[0].id} name={album.artists[0].name} 
           
            />
            )
        })}
        </div> */}

      </div>
    </article>
  )
}

