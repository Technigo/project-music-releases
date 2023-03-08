import React from 'react';

export const Image = (props) => {
  return (
    <div>
      {props.spotifyData.albums.items.map((albumCover) => {
        return (<img src={albumCover.images[1].url} alt="pic" />)
      })}
    </div>
  );
}