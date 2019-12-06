import React from 'react'
import './Album.css'
import Controls from 'Components/Controls/Controls.js'

const Album = ({  image }) => {
  return (
    <div className="album-cover">
    
      <img src={image} alt="" />
    
      <Controls />
    
    </div>
  )
  }

export default Album


