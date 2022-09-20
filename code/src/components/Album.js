import React from "react";

import Icons from './Icons.js'

const Album = (props) => {
    const albumsArray = props.albumsArray
    return (
      <>
        {albumsArray.map((item) => (
          <div className="album-card" key={item.id}>
            <div className="image-container">   
              <img src={item.images[1].url} className='album-image' alt='Cover'/>
              <Icons />
            </div>
            <a href={item.external_urls.spotify} className='album-name'>{item.name}</a>
            <div className="artists">{item.artists.map((artist) => (
              <a className='artist-name' href={artist.external_urls.spotify} key={artist.id}>{artist.name}</a>
            ))}
            </div>
          </div>
        ))}
      </>
 
    )
  }
  export default Album

