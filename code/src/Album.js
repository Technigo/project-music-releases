import React from 'react'
import './index.css'
import { Icons } from './Icons.js'
import { Artist } from './Artist'

export const Album = (props) => {
  console.log(props)
  console.log(props.data.artists.name)
  return (
    <div className="albumCard">
      <div className="image-container">
        <img src={props.data.images[0].url}>
        </img>
        <div className="middle">
          <Icons />
        </div>
      </div>
      <a href={props.data.external_urls.spotify}>
        <h2>
          {props.data.name}
        </h2>
      </a>
      <a href={props.data.artists[0].external_urls.spotify}>
        <h3>
          {props.data.artists.map(item => {
            return (
              <Artist key={item.id} item={item} />
            )
          })}
        </h3>
      </a>
    </div >
  )
}