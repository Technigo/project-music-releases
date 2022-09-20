import React from 'react';

const ArtistName = (props) => {
        console.log(props.data);
  return (
    <>
        <h2>
          {props.data.artists.name}
        </h2>
   </>  
  )
}
export default ArtistName;
