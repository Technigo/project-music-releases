import React from 'react'
import Artists from './Artists'

const Album = (props) => {
  return props.album.map((album) => {
    return (
      <a href={album.external_urls.spotify} key={album.id} className="album-img">
        <div className="image-container" style={{backgroundImage:`url(${album.images[0].url})`}} >
          <img src="./icons/heart.svg" alt="heart" className="icon-heart"/>
          <img src="./icons/play.svg" alt="play" className="icon-play"/>
          <img src="./icons/dots.svg" alt="dots" className="icon-dots"/>
        </div>
        <h5 className="album-name">
          {album.name}
        </h5>
        <h5 className="artist">
          <Artists artists={album.artists}/>
        </h5>
      </a>
    )
  })
}


export default Album 