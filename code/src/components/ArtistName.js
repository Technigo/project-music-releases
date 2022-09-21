import React from 'react';

const ArtistName = (props) => {   
  return (
    <>
      <a 
      className='grey-underline' 
      href={props.artistLink}>
        <div>
          <h3 className='artist-name'>
          {props.artistName}
          </h3>
        </div>
      </a>
    </>
  );
}
 
export default ArtistName