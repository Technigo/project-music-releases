import React from 'react'

const Albumcover = (props) => {
    //const itemArray = data.albums.items
  
    // let props = {
    //   album: item.artists[0].name
    // }
    return (
      <div>
        <img src={props.src} alt="bild" />
      </div>
    )
  }

export default Albumcover