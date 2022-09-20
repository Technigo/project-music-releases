import React from 'react';



const AlbumName = (props) => {
  console.log(props.data);   
  return (
    <>
    
    <h2>
     {props.albumName}
    </h2>
    
    
    </>
  );
}
 
export default AlbumName