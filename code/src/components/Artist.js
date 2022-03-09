import React from 'react'


 // Creating a new component
const Artist = (props) => {
   return (

      <div className="artist">
        <a href={props.artistLink}> 
        <p>{props.artistName}</p>
        </a>
         </div>

   ) 
   }


export default Artist 