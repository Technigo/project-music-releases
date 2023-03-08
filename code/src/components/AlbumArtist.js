import React from 'react';

const AlbumArtist = (props) => {
    // console.log(props.AlbumArtist.artists)
    // let artistName = props.AlbumArtist.artists.map((artist, index) => {artist.name}).join(',')
    let artistName = props.AlbumArtist.artists.reduce(function(prevVal,currVal,idx){
        return idx == 0 ? currVal.name : currVal.name + ', ' + prevVal;
    }, '')
    console.log(artistName);
    return (
        <a className='AlbumArtist' href="google.com" target="_blank" rel="noopener noreferrer"><h3>{artistName}</h3></a>
    )
}

export default AlbumArtist;