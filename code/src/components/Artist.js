import React from "react";
import data from '../data.json'
import Album from "./Album.js"

const Artist = () => {
    return (
      data.albums.items.map((item) => {
        console.log(item.name)
        return (item.name)
    })
    )
}

// Album()
// console.log(array)
export default Artist;