// import React from 'react'

// const Artist = (props) => {

//     console.log(props, 'hejhej')
//     return (
//       <span>{props.item.name} </span>
//     )
//   }

//   export default Artist

import React from "react";

export const Artist = (props) => {
  return (
    <p className="artist">
      <a href={props.url}>{props.name}</a>
    </p>
  );
};


  
  