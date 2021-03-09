import React from 'react'

const Image = ({ coverImage, url}) => {
  return (
    <div>
      <a href= {url}>
      <img  src={coverImage[1].url} alt="album-cover" />

      </a>
      
    </div>
  )
}

export default Image