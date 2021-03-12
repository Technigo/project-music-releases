import React from 'react'

const AlbumImage = (prop) => {
    return (
          <img className="album-image" id="albumImage" src={prop.image} alt="album-cover"/>   
    )
}

export default AlbumImage