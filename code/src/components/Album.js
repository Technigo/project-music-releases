import React from "react";
import data from "../data.json"

const Album = () => {
  
    const array = data.albums.items.map((album) => {
        // console.log(album)
        return (album)
    })
    
  //  console.log(array) 
}

export default Album;