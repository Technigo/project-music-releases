import React from 'react'

import Icons from './Icons.js'

const Albumcover = (props) => {
    //const itemArray = data.albums.items
  
    // let props = {
    //   album: item.artists[0].name
    // }
    return (
      <div className="album-img">
        
          <img className="" src={props.src} alt="bild" />
        
        {/* <a href={props.url} target="_blank" rel="noopener noreferrer"> */}
        <Icons />
        {/* </a> */}
      </div>
    )
  }

export default Albumcover