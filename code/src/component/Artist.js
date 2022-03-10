import React from 'react';

const Artist = (props) => {
    console.log('artister', props)
    return (
        <div>
        <h3 className="artist-name">        
          {props.artistArray.map((artist) =>
          <a 
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          >
          <span>{artist.name}</span></a>)}
        </h3>
      </div>
    )
}

export default Artist
  
  




// import React from 'react'

// const Artist = (props) => {

//     console.log(props, 'hejhej')
//     return (
//       <span>{props.item.name} </span>
//     )
//   }

//   export default Artist

// import React from "react";


// export const Artist = (props) => {
//   return (
//     <p className="artist">
//       <a href={props.url}>{props.name}</a>
//     </p>
//   );
// };

