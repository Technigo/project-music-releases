import React from 'react';


const AlbumName = (props) => {
   
  return (
    <>
    {/* <div className='album-title'> */}
      <h2 className='album-title'>
      {props.albumName}
      </h2>
    {/* </div> */}
    </>
  
  );
}
 
export default AlbumName