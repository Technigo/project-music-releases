import React from 'react'
import { Albums } from './components/Albums.js'
import { Artists } from './components/Artists.js'
import { Albumcovers } from './components/Albumcovers.js'
import 'Cards.css'
import './components/Albumcovers.css'
import './components/Artists.css'

export const Cards = (props) => (
  <div className="Cards">
    <Albumcovers
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

  </div >
)