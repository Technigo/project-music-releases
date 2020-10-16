import React from 'react';
import './artist.css';

/*We need to make a split-function here for artistName */

const Artist = props => {
  if (props.index === 0) {
    return (
      <a className="artist__name" href={props.artistURL}>
        {props.artistName}
      </a>
    );
    /* INGET KOMMA TECKEN */
  } else if (props.index === props.length - 1) {
    return (
      <a
        className="artist__name"
        /* key={artist.id} */
        href={props.artistURL}
      >
        {'\u00A0 ' + ' & ' + props.artistName}
      </a>
    );
  } else {
    /* RETURNERA ARTIST MED KOMMA TECKEN FÖRE */
    return (
      <a
        className="artist__name"
        /* key={artist.id} */
        href={props.artistURL}
      >
        {', ' + props.artistName + ' '}
      </a>
    );
  }
};
export default Artist;

//   // if (props.length === 1)
//   //   return (
//   //     <a className="artist__name" href={props.artistURL}>
//   //       {artist.name}
//   //     </a>
//   //   );
//   // else {
//   //   if (props.index < props.length - 1)
//   //     return (
//   //       <a className="artist__name" href={props.artistURL}>
//   //         <span>{props.artistName}, </span>
//   //       </a>
//   //     );
//   //   else
//   //     return (
//   //       <a className="artist__name" href={props.artistURL}>
//   //         {props.artistName}
//   //       </a>
//   //     );
//   // }
// });

/* Påbörjat för att kolla hur lång props-arrayen är. Om index = 0, returnera bara artist.name, om längre, returnera artist.name med komma om sista med & */
// console.log(props.length);
// console.log(props.index, props.artistName, props.length);
// if (props.index === 1)
//   return (
//     <a
//       className="artist__name"
//       key={props.artistName}
//       // href={props.external_urls.spotify}
//     >
//       {props.artistName}
//     </a>
//   ) else if (props.index > 1 )
//   return (
//     <a
//       className="artist__name"
//       key={props.artistName}
//       // href={props.external_urls.spotify}
//     >
//       {props.artistName}
//       {',\u00A0'}
//     </a>
//   )

// if (props.index < 0)
//   return (
//     <a
//       className="artist__name"
//       key={artist.id}
//       href={artist.external_urls.spotify}
//     >
//       {artist.name}
//       {',\u00A0'}
//     </a>
//   );

// if (props.artistsArray.length > 1) {
//   return props.artistsArray.map(artist => {
//     console.log(artist);
//     return (
//       <a
//         className="artist__name"
//         key={artist.id}
//         href={artist.external_urls.spotify}
//       >
//         {artist.name}
//         {',\u00A0'}
//       </a>
//     );
//   });
// }

// return props.artistsArray.map((artist, index) => {
//   console.log(artist, index);
//   return (
//     <a
//       className="artist__name"
//       key={artist.id}
//       href={artist.external_urls.spotify}
//     >
//       {artist.name}
//       {index < props.artistsArray - 1 ? ',\u00A0' : ''}
//     </a>
//   );
// });

/* Skriver ut namnen med komma emellan */

// if (props.artistsArray.length === 1) {
//   return props.artistsArray.map((artist, index) => {
//     console.log(artist);
//     return (
//       <a
//         className="artist__name"
//         key={artist.id}
//         href={artist.external_urls.spotify}
//       >
//         {artist.name}
//       </a>
//     );
//   });
// } else if (props.artistsArray.length > 1) {
//   return props.artistsArray.map((artist, index) => {
//     console.log(artist);
//     return (
//       <a
//         className="artist__name"
//         key={artist.id}
//         href={artist.external_urls.spotify}
//       >
//         {artist.name}
//         {/* {artist.name} {index < props.artistsArray.length - 1 ? ',\u00A0' : ''} */}
//       </a>
//     );
//   });
// }

/* return (props.artistsArray.map(artist => {
  console.log(artist); */
