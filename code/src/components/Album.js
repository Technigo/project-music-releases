import React from "react"
import ImageCovers from "./ImageCovers"

// props = AllAlbums in App.js
const Album = (props) => {
    return ( 
      <div>
        <ImageCovers key="id" data={props.items.map(album => album)} />
      </div>
    )
}

export default Album

//data.albums.items
//data.albums.items.image === Cover Images
//data.albums.items.artists === for all artist information
