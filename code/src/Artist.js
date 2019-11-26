import React from 'react'
// import data from './data.json'

// const music = data.albums.items

export const Artist = (props) => {
  return (
    <div className="songArtist">
      <p><a href={props.artistUrl}>{props.songArtist}</a></p>
    </div>
  );
};
