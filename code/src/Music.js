import React from "react";
import data from './data.json'


const oldList = data.albums.items 
export const albumNew = []

const ArtistsName = (oldList) => {

    const newList  = []

    oldList.forEach(item => {
        newList.push(item.name)
    })
    let artistWord = newList.toString()
    artistWord.replace(",", ", ")
    return  artistWord

}



oldList.forEach((item => {
    albumNew.push({
        name: item.name,
        image: item.images[0],
        artist: ArtistsName(item.artists)

    })

}))