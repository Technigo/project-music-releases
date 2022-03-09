import React from 'react'

import Icons from './Icons.js'

const Albumcover = (props) => {
    //const itemArray = data.albums.items
  
    // let props = {
    //   album: item.artists[0].name
    // }
    return (
      <div className="">
        <img src={props.src} alt="bild" />
        <Icons />
      </div>
    )
  }

export default Albumcover