import React from 'react'
import './index.css'
import { Icons } from './Icons.js'


export const Album = (props) => {
  console.log(props)
  console.log(props.data.artists.name)
  return (
    <div className="albumCard">
      <div className="icons-hover-effect">
        {/* <Icons /> */}
        <img src={props.data.images[0].url}>
        </img>
      </div>
      <h2>
        {props.data.name}
      </h2>
      <h3>
        {props.data.artists[0].name}
      </h3>


    </div>
  )
}