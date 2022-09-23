import React from 'react';

import Covers from './Covers';
import AlbumName from './AlbumName';
import ArtistInfo from './ArtistInfo';

const MusicCard = (props) => {
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
        <ArtistInfo
        data = {props.data} /> 
      </div>  
    </>
  );
};

export default MusicCard
