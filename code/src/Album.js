import React from 'react'
import data from './data.json'
import { ReactComponent as Heart } from './icons/heart.svg'
import { ReactComponent as Play } from './icons/play.svg'
import { ReactComponent as Dots } from './icons/dots.svg'
import './album.css'

console.log(data)

export const Album = (props) => (
  <div>
    <div className="albumcontainer" >
      <a className="image" href={props.uri}> <img src={props.image} alt="Album cover"></img> </a>

      <div className="iconscontainer">
        <div className="icon"><Heart /></div>
        <a className="icon" href={props.uri}><Play /></a>
        <div className="icon"><Dots /></div>
      </div>
    </div>
    <div className="artistcontainer">
      <a className="album" href={props.uri}>{props.albumname}</a>
      <a className="artist" href={props.artisturi}>{props.artistname}</a>
    </div>
  </div>
)



