import React from 'react';

 export const Artist = (props) => {
   console.log('aleksa', props);
   return (
       <h2 className="artist-name"> {props.artistName}</h2>
   );
 };
 

