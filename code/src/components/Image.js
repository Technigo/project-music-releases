import React from 'react'
import data from '../data.json'

const albumImage= data.albums.items[0].images[0].url

const Image = () => {
  return (
    <div>
      <img src={albumImage}/>
    </div>
  )
}

export default Image