import React from "react";

const AlbumCard = props => {
  console.log("props.artist",props.artist)
  console.log("props", props)
  return (
    <article className="album-card">
      <div className="img-container">
        <img src={props.img} alt="album or single cover" />
      </div>
      <div className="album-text-container">
        <h2 className="album-title">{props.song}</h2>
        <p className="artists">

          {props.artist.map(artists => (
              <a href="">{artists.name}</a>
              ))}
          {/* <a href="">{props.artist}</a> */}
        </p>
      </div>
    </article>
  );
};

export default AlbumCard;
