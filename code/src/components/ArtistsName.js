import React from 'react';

export const ArtistsName = (props) => {
  console.log('artist', props);
  return (
    <div>
      <a className="artistName" href="">{props.name}</a>
      {props.isLast ? '' : ','}
    </div>
  );
};

// eslint-disable-next-line max-len
// {props.link} Lyfte ut denna så länge från href, tror det ska vara något annat där men osäker på vad.

// Vi behöver även fixa så att det blir en rad när det är flera artistnamn. <span></span>?
