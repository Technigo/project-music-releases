import React from 'react';
import 'index.css'
// article
// namn på artisterna
// used using the ternary operator to conditionally add a
// comma and space after each artist's name except for the last one in an array.
//   {props.artists.length - 1 > index ? ', ' : ''}

const Artists = (props) => {
  console.log(props.artists);
  return (

    <div className="artistas">

      {props.artists.map((artist, index) => (
        <span className="artistName">
          {artist.name}
          {props.artists.length - 1 > index ? ', ' : ''}
        </span>

      ))}

    </div>
  );
};

export default Artists;