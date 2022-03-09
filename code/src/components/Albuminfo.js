import React from 'react'

const Albuminfo = (props) => {
    //const itemArray = data.albums.items
  
    return (
      <div className="">
        <p>{props.album}</p>
        <p>{props.artist}</p>
      </div>
    )
  }

export default Albuminfo