import React from 'react';

const AlbumArtist = (props) => {
    // console.log(props.AlbumArtist.artists)
    // let artistName = props.AlbumArtist.artists.map((artist, index) => {artist.name}).join(',')
    let artistName = props.AlbumArtist.artists.reduce((prevVal,currVal,idx) => {
        return idx == 0 ? currVal.name : currVal.name + ' & ' + prevVal;
    }, '')
    console.log(artistName);
    return (
        <a className='AlbumArtistLink' href="{props.AlbumArtist.artists[0].external_urls.spotify}" target="_blank" rel="noopener noreferrer"><h3 className='AlbumArtist'> {artistName} </h3></a>
    )
}

export default AlbumArtist;