import React from "react";
import data from './data.json'


const oldList = data.albums.items 

export const albumNew = []

const ArtistsName = (oldList) => {

    const newList  = []

    oldList.forEach(item => {
        newList.push({name: item.name, link: item.external_urls.spotify})
    })

    //let artistWord = newList.toString()
    //artistWord.replace(",", ", ")
    return  newList 

}

oldList.forEach((item => {
    albumNew.push({
        name: item.name,
        image: item.images[0].url,
        linkAlbum: item.external_urls.spotify,
        artist: ArtistsName(item.artists)
    })

}))
