import React from "react";


 export const Album = (props) => {
   return (
     <div className="album"> 
          <a href={props.href} target="_blank" rel="noopener noreferrer">
             <p className="albumTitle">{props.title}</p>
          </a>
     </div>
   );
 };

