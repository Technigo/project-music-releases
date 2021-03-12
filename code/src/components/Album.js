import React from 'react'
import Artist from './Artist'

const Album = (props) => {
  console.log(props)
  return (
    <div className="album-wrapper">
    {props.items.map(album => {
    return (
      <div key={album.id} className="album-card">
        <div className="album-cover">
          <div className="icons">
            <img className="icon heart" src="/icons/heart.svg" alt="heart icon"></img>
            <img className="icon play" src="/icons/play.svg" alt="play icon"></img>
            <img className="icon dot" src="/icons/dots.svg" alt="ellipsis"></img>
          </div>
          <img className="album-image" src={album.images[0].url} alt={album.name} />
        </div>
        <a className="album-name" href={album.external_urls.spotify}>
          {album.name}
        </a>
        
        <div>
          <Artist
            artists={album.artists}
          />
        </div>
        
      </div>
    )})}
    </div> 
  )
}


export default Album
