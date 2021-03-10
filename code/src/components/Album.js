import React from 'react'
import data from '../data.json'
import Artist from './Artist'

const Album = (props) => {

  console.log(props)

  return (
    <div className="album-card">
      <div className="album-cover">
        <div className="icons">
          <img className="icon heart" src="/icons/heart.svg"></img>
          <img className="icon play" src="/icons/play.svg"></img>
          <img className="icon dot" src="/icons/dots.svg"></img>
        </div>
        <img className="album-image" src={props.image} alt={props.name} />
      </div>
      <a className="album-name" href={props.url}>
        <p>{props.name}</p>
      </a>
      
      <div>
        <Artist
          artists={props.artist}
        />
      </div>
    </div>
  )
}



export default Album

{/* </div>
      {props.artist.map(artist => {
        return <Artist key={artist.id} name={artist.name} url={artist.external_urls.spotify}/>
      })} */}
