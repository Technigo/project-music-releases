/* eslint-disable jsx-quotes */
/* eslint-disable indent */
/* eslint-disable block-spacing */
/* eslint-disable quotes */
import React from 'react';

const AlbumArtist = (props) => {
  console.log(props.AlbumArtist.artists);

  // let print = props.AlbumArtist.artists.map((singer) => {return (<h3>{singer.name}</h3>)})
  const print = props.AlbumArtist.artists.map((singer, index) => {return (<a className="AlbumArtistLink" href={singer.external_urls.spotify} target="_blank" rel="noopener noreferrer"><h3 className="AlbumArtist"> {singer.name} {index < props.AlbumArtist.artists.length - 1 ? "& " : ""}</h3></a>)})
// // console.log(props.AlbumArtist.artists)
// // let artistName = props.AlbumArtist.artists.map((artist, index) => {artist.name}).join(',')
//   // const artistName = props.AlbumArtist.artists.reduce((prevVal, currVal, idx) => {
//   //   return idx === 0 ? currVal.name : currVal.name + ' & ' + prevVal;
//   // }, '')
//   // console.log(artistName);
//   // const artistURL = props.AlbumArtist.artists.map((artists, index) => {
//   //   console.log(artists);
//   //   console.log(index)
//   //   return (artists.external_urls.spotify)
//   // })
//   // To console log and see the results of map
//   // console.log(artistURL[0]);
  return (
    <div className='flex'>

      {print}
    </div>
  )
}

export default AlbumArtist;