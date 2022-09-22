import React from 'react';


const Artist = (props) => {
 
return (   
<div className="artist">
<a
    className="artistUrl"
    href={props.ArtistLink}
    target="_blank"
    rel="noopener noreferrer"
>
    <span>{props.ArtistName}</span>
</a>
</div>

)}


/**/


// const generateDelimiter = (index, length) => {
//     if (index === length - 2) {
//       return " & ";
//     } else if (index < length - 2) {
//       return ", ";
//     }
//     return;
//   };

//   return (
//     <span>
//  {props.ArtistName}
//       {generateDelimiter(index, props.item.artists.length)}
//     </span>
//   )
// }


export default Artist;