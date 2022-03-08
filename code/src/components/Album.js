import React from "react";

import Artist from "./Artist";

// props = AllAlbums in App.js
const Album = ({albums}) => {
  return (
    <div>
      <img src={albums.images[0].url}></img>
      <h2>{albums.name}</h2>
      {albums.artists.map((artist =>
        <Artist key={artist.id} artists={artist} />
      ))}
    </div>
  )
}

export default Album