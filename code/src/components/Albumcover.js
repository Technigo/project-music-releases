import React from 'react'

import Icons from './Icons.js'

const Albumcover = (props) => {
    return (
      <div className="album-img">      
        <img className="" src={props.src} alt="bild" />
        <Icons />
      </div>
    )
  }

export default Albumcover