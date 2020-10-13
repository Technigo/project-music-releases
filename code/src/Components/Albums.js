import React from 'react';
import data from 'data.json';
import Artists from 'Components/Artists';
import ImageAndSongName from 'Components/ImageAndSongName';



// Main component    mappedAlbum.forEach()
const Albums = () => {
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
    
    return (
        <>
            <div className="album-wrapper">
                <ImageAndSongName imgUrl={mappedAlbum[5].albumImage} songName={mappedAlbum[5].albumSongTitle} />
                <Artists artistName={mappedArtist[5]} />
            </div>
        </> 
    )
}

export default Albums