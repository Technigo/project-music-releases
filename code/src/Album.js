import React from 'react'
import data from './data.json'
import { ReactComponent as Heart } from './icons/heart.svg'
import { ReactComponent as Play } from './icons/play.svg'
import { ReactComponent as Dots } from './icons/dots.svg'
import './album.css'

console.log(data)

export const Album = (props) => (
  <div>
    <div className="Album-container" >
      <a className="Image" href={props.uri}> <img src={props.image} alt="Album cover"></img> </a>

      <div className="icons-container">
        <div className="icon"><Heart /></div>
        <a className="icon" href={props.uri}><Play /></a>
        <div className="icon"><Dots /></div>
      </div>
    </div>
    <div className="artist-container">
      <a className="Album" href={props.uri}>{props.albumname}</a>
      <a className="Artist" href={props.artisturi}>{props.artistname}</a>
    </div>
  </div>
)



