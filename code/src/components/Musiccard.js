import React from 'react';
import Covers from './Covers';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import TrackCard from './TrackCard';


const Musiccard = (props) => {
  console.log(props.data);   
  return (
    <>
    <Covers artistImage = {props.data.images[1].url} />
    <AlbumName albumName = {props.data.name} />    
    <ArtistName artistName = {props.data.artists[0].name} />
    <TrackCard trackCard = {props.data.total_tracks} />  
    </>
  );
}

export default Musiccard