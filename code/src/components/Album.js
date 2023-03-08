import React from 'react';

export const Album = (props) => {
  return (
    <div>{props.spotifyData.albums.items.map((albumTitle) => {
      return (<div><img src={albumTitle.images[1].url} alt="pic" /><p>{albumTitle.name}</p></div>)
    })}
    </div>
  );
}