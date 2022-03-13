import React from 'react'

import Icons from './Icons.js'

const Albumcover = ({src}) => {
    return (
      <div className="album-img">      
        <img className="" src={src} alt="bild" />
        <Icons />
      </div>
    )
  }

export default Albumcover