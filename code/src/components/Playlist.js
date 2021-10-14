import PlaylistCover from "PlaylistCover";
import React from "react";
import PlaylistTracks from "./PlaylistTacks";

const Playlist = ({ image, track, trackUrl }) => {
  return (
    <div>
      <PlaylistCover image={image} />
      <PlaylistTracks track={track} trackUrl={trackUrl} />
    </div>
  );
};

export default Playlist;
