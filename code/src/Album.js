import React from 'react'
import './album_style.css'

import { Icons } from './Icons'
import { Artist } from './Artist'

// Album card
export const Album = (props) => {
  // console.log('albums', albums)
  // console.log(props.title)
  // console.log(props.name)
  // console.log('inside props:', props)
  // console.log(props)

  return (
    <article className="Card">
      <div className="album-container">

        <div>
          <img className="album-image" src={props.image} alt="Album artwork"></img>
        </div>

        <Icons />
        <a className="song-title" href={props.linkAlbum}> {props.title} </a>
        
        <div>
          <a className="artist-name" href={props.linkArtist}> {props.name} </a>
        </div>

        <div className="artist-name">
        <Artist />
        </div>
        

      </div>
     
    </article>
  )
}

/*
albums.map()..
return..

1) The Grid of all AlbumsContainer Component here - alla Album
2) Need a AlbumCard Component? - ett Album
3) Snart får jag hjärn-smälta..:)

*/