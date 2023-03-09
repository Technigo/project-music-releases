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
      <a href={props.artists.url} target="_blank" rel="noreferrer noopener">
        {props.artists.map((artist) => (
          <p className="artistName">
            {artist.name}
          </p>

        ))}
      </a>
    </div>
  );
};

export default Artists;