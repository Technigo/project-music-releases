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
        />
        <AlbumName 
        albumName = {props.data.name}
        albumLink = {props.data.external_urls.spotify}        
        />    
        <ArtistName 
        artistName = {props.data.artists[0].name} 
        artistLink = {props.data.artists[0].external_urls.spotify}
        />           
      </div>  
    </>
  );
};

export default Musiccard







