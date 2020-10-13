import React from 'react';
import data from 'data.json';
import Artists from 'Components/Artists';
import ImageAndSongName from 'Components/ImageAndSongName';


// Creating new array albumList (simplifying the data-path)
const albumList = data.albums.items;
console.log(albumList)

// Mapping over the album-array, declaring variables for image and title
const mappedAlbum = albumList.map(album => { 
    const albumImage = album.images[1].url;
    const albumSongTitle = album.name;
    return { albumImage, albumSongTitle }
})

// Mapping over artist-array, declaring only one artist for now
const mappedArtist = albumList.map(artist => { 
    const artistName = artist.artists[0].name;
    return artistName
})

// Main component
const Albums = (props) => {
    return (
        <div>
            <div className="wrapper">    
            <ImageAndSongName imgUrl={mappedAlbum[30].albumImage} songName={mappedAlbum[30].albumSongTitle} />
            <Artists artistName={mappedArtist[30]}/>
            </div> 
        </div>
)}

export default Albums