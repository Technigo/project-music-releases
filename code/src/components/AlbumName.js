import React from 'react';

const AlbumName = (props) => {   
  return ( 
    <>
      <a  href={props.albumLink}>
      <h2 className='album-title'>{props.albumName}</h2> 
      </a> 
    </>    
  );
}
 
export default AlbumName