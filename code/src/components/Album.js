import React from 'react';
import Artist from './Artist.js';

const Album = (props) => {
    console.log(props.data);
return (
    <>
    <h2>
      {props.data.name}
    </h2>
    <Subheader totalTracks = {props.data.total_tracks}/>
    </>
  
);
}

export default Album;