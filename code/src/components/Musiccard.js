import React from 'react';

import Covers from './Covers';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';

const Musiccard = (props) => {
  console.log(props.data)
  return (
    <>
      <div className="music-card"> 
        <Covers
        artistImage = {props.data.images[1].url} 
        playLink = {props.data.external_urls.spotify}
        artistName = {props.data.artists[0].name} 
        />
        <AlbumName 
        albumName = {props.data.name}
        albumLink = {props.data.external_urls.spotify}        
        />    
        {props.data.artists.map(artist => {
        return (
          <ArtistName 
          artistLink = {artist.external_urls.spotify} 
          artistName = {artist.name}         
          key={artist.id}/>
          )
        
        })}
      </div>  
    </>
  );
};

export default Musiccard


// props.data.artists.map(artist => {
//   return (<ArtistName artistLink = {artist.external_urls.spotify} ArtistName = {artist.name} key={artist.id}/>)
// })



{/* <ArtistName 
        artistName = {props.data.artists[0].name} 
        artistLink = {props.data.artists[0].external_urls.spotify}
        />           

 */}