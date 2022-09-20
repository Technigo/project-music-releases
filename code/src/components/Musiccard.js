import React from 'react';

import Icons from './Icons';
import Covers from './Covers';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';




const Musiccard = (props) => {
   console.log(props.data)
  return (
    <>
    <div className="music-card"> 
      <Covers artistImage = {props.data.images[1].url} />
      <AlbumName albumName = {props.data.name} />    
      <ArtistName artistName = {props.data.artists[0].name} />
      <Icons artistLink = {props.data.external_urls.spotify} />
           
    </div>  
    </>
  );
}

export default Musiccard




