import React from 'react';


const ArtistName = (props) => {
  console.log(props)  
  return (
    <>
    <div></div>
    <h3>
     {props.artistName}
    </h3>
    </>
  );
}
 
export default ArtistName