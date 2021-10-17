import React from "react";

const Playlist = (props) => {
  console.log("This is the playlist");
  return (
    <section className="aside">
      <div className="pic-name">
        <img className="thumbnail" alt="cover thumbnail" src={props.cover} />
        <a href={props.playlistUrl}>
          <h4 className="playlist-name">{props.playlistName}</h4>
        </a>
      </div>
    </section>
  );
};

export default Playlist;
