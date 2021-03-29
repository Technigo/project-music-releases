import React from 'react'

const AlbumImage = ( { image } ) => {
    return (
          <img className="album-image" id="albumImage" src={image} alt="album-cover"/>   
    )
}

export default AlbumImage