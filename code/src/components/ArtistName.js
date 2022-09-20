import React from 'react';


const ArtistName = (props) => {
   
  return (
    <>
    <div className='artist-name'>
      <h3>
        {props.artistName}
      </h3>
    </div>
    </>
  );
}
 
export default ArtistName