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
    const num = item.artists.length
    if (num === 1){
        albumNew.push({
            name: item.name,
            image: item.images[0].url,
            linkAlbum: item.external_urls.spotify,
            artist: ArtistsName(item.artists),
            artist1: item.artists[0].name,
            link1: item.artists[0].external_urls.spotify,
            artist2: '',
            link2: '#',
            artist3: '',
            link3:'#'
        })
    
    
    }
    else if (num === 2){
        albumNew.push({
            name: item.name,
            image: item.images[0].url,
            linkAlbum: item.external_urls.spotify,
            artist: ArtistsName(item.artists),
            artist1: `${item.artists[0].name}`,
            link1: item.artists[0].external_urls.spotify,
            artist2: `, ${item.artists[1].name}`,
            link2: item.artists[1].external_urls.spotify,
            artist3: '',
            link3:'#'
        })
    
    
    }
    else if (num === 3){
        albumNew.push({
            name: item.name,
            image: item.images[0].url,
            linkAlbum: item.external_urls.spotify,
            artist: ArtistsName(item.artists),
            artist1:  `${item.artists[0].name}`,
            link1: item.artists[0].external_urls.spotify,
            artist2:  `, ${item.artists[1].name}`,
            link2: item.artists[1].external_urls.spotify,
            artist3: `, ${item.artists[2].name}`,
            link3: item.artists[2].external_urls.spotify
        })
    
    
    }
    else if (num > 3){
        albumNew.push({
            name: item.name,
            image: item.images[0].url,
            linkAlbum: item.external_urls.spotify,
            artist: ArtistsName(item.artists),
            artist1:  `${item.artists[0].name}`,
            link1: item.artists[0].external_urls.spotify,
            artist2:  `, ${item.artists[1].name}`,
            link2: item.artists[1].external_urls.spotify,
            artist3: 'Various Artists',
            link3: '#'
        })
    
    
    }
    else {
        albumNew.push({
            name: item.name,
            image: item.images[0].url,
            linkAlbum: item.external_urls.spotify,
            artist: ArtistsName(item.artists),
            artist1: '',
            link1: '#',
            artist2: '',
            link2: '#',
            artist3: '',
            link3: '#'
        })
    
    
    }

   

}))
