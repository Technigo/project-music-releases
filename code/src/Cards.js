import React from 'react'
import { Albums } from './Albums.js'
import { Artists } from './Artists.js'
import { Images } from './Images.js'
import { ReactComponent as Heart } from 'icons/heart.svg'
import { ReactComponent as Play } from 'icons/play.svg'
import { ReactComponent as Dots } from 'icons/dots.svg'
import 'Cards.css'

export const Cards = (props) => (
  <div className="Cards">
    <div className="heart-icon"><Heart /></div>
    <div className="play-icon"><Play /></div>
    <div className="dots-icon"><Dots /></div>
    <Images
      key={props.id}
      image={props.image}
    />
    <Albums
      key={props.id}
      albumName={props.albumName}
      albumUrl={props.albumUrl} />
    <Artists
      artistName={props.artistName}
      artistUrl={props.artistUrl} />
  </div>
)

