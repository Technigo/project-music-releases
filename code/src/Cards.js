import React from 'react'
import { Albums } from './Albums.js'
import { Artists } from './Artists.js'
import { Images } from './Images.js'
import 'Cards.css'
import 'Albumcovers.css'
import 'Artists.css'

export const Cards = (props) => (
  <div className="Cards">
    {/* <div className="album-cover" style={{ backgroundImage: `url(${props.image})` }}> */}
    {/* </div> */}
    <Images
      key={props.id}
      image={props.image}
    />
    <Albums
      key={props.id}
      albumName={props.albumName}
      albumUrl={props.albumUrl} />

    <div className="artistName">
      {props.item.artists.map(item => {
        return (
          <Artists key={item.id} item={item} />
        )
      })}
    </div>

    {/* <Artists key={props.item.id} item={props.item}
    /> */}

    {/* <Artists
      artistName={props.artistName}
      artistUrl={props.artistUrl} /> */}

  </div >
)

// {props.item.artists.map(item => {
//   return (
//     <Artists
//       artistName={props.artistName}
//       artistUrl={props.artistUrl} />
//   )
// })}