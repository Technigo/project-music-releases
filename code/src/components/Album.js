import React from 'react'

import Artists from './Artists'
import heartIcon from './../icons/heart.svg'
import playIcon from './../icons/play.svg'
import dotsIcon from './../icons/dots.svg'

const Album = (props) => {
  return props.album.map((album) => {
    return (
      <div key={album.id}>
        <a href={album.external_urls.spotify}>
          <div className="image-container" style={{backgroundImage:`url(${album.images[0].url})`}} >
            <img src={heartIcon} alt="heart" className="icon-heart"/>
            <img src={playIcon} alt="play" className="icon-play"/>
            <img src={dotsIcon} alt="dots" className="icon-dots"/>
          </div>
        </a>
        <h5 className="album-name">
          {album.name}
        </h5>
        <h5 className="artist">
          <Artists artists={album.artists}/>
        </h5>
    
      </div>
    )
  })
}


export default Album 