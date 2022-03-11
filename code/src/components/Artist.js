import React from 'react'


 // Creating a new component
const Artist = (props) => {
   return (

      // <div className="artist">
        <a className="linked-artist" href={props.artistLink} target="_blank" rel="noopener noreferrer"> 
        {props.artistName}
        </a>
         // </div>

   ) 
   }


export default Artist 