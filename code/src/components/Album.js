import React from 'react'
import Artists from './Artists'

const Album = (props) => {
    return (
        <div className="cards" >
            {props.album.map((album) => {
            return (
            
                <a href={album.external_urls.spotify} key={album.id} className="album-img">
                    <div className="image-container" style={{backgroundImage:`url(${album.images[0].url})`}} >
                      <div className="all-icons">
                         <img src="./icons/heart.svg" alt="icon heart" className="icon-heart"/>
                         <img src="./icons/play.svg" alt="icon play" className="icon-play"/>
                         <img src="./icons/dots.svg" alt="icon play" className="icon-dots"/>
                     </div>
                     </div>
                     <h5 className="album-name">
                      {album.name}
                     </h5>
                        <h5 className="artist">
                        <Artists artists={album.artists}/>
                       </h5>
                </a>
            )
            })}
        </div>
    )
}

export default Album 