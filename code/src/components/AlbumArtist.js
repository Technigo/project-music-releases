import React from 'react';

const AlbumArtist = (props) => {
// console.log(props.AlbumArtist.artists)
// let artistName = props.AlbumArtist.artists.map((artist, index) => {artist.name}).join(',')
  const artistName = props.AlbumArtist.artists.reduce((prevVal, currVal, idx) => {
    return idx === 0 ? currVal.name : currVal.name + ' & ' + prevVal;
  }, '')
  console.log(artistName);
  // This now works for when it's only 1 artist, clicking on the artist's name opens the correct link
  const artistURL = props.AlbumArtist.artists.map((artists) => {
    return (artists.external_urls.spotify)
  })
  // To console log and see the results of map
  console.log(artistURL[0]);
  return (
    <a className="AlbumArtistLink" href={artistURL} target="_blank" rel="noopener noreferrer"><h3 className="AlbumArtist"> {artistName} </h3></a>
  )
}

export default AlbumArtist;