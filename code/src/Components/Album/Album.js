import React from 'react'
import './Album.css'

const Album = ({ title, image, url}) => {
  return (
    <div>
    <img src={image} alt="" />
    <a href={url}><p>{title}</p></a> 
    </div>
  )
  }

export default Album


