import React from 'react'

// // ALL ALBUM
// const albumArray = data.albums.items

// // AN ARRAY WITH ARTISTS
// const allArtists = albumArray.map(album => album.artists)
// const artistURL = allArtists.map(artist => artist.map((item) => item.external_urls.spotify))
// const nameOfArtists = allArtists.map(artist => artist.map((item) => item.name))

// console.log(nameOfArtists)


const Artist = (prop) => {



    return (
        <a href={prop.hrefArtist} target="_blank">
            <h3 className="artistName">{prop.artist}</h3>
        </a>
    )

}

// const allArtist = albumArray.map(album => album.artists)

// const XX = allArtists.map((artist) => artist)

// import React from 'react';

// const Artist = (prop) => {
//     return (
//         <a className="artistName" href={prop.href}>
//             {prop.artist}
//         </a> 
//     )
// }
export default Artist;

