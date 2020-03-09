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
        {/* <img src='../public/icons/play.svg'></img> */}
        <p className="song-title" href={props.external_urls}> {props.title} </p>

        <div>
          {/* Göra en .map här för att få ut href URL? */}
          <p className="artist-name"> {props.name} </p>
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