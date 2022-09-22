import React from "react";
import ArtistName from "./ArtistName";

const MusicCard = (props) => {
  console.log(props.recordData.artists);
  // console.log(`bildadress ${props.data.images[1].url}`);

  return (
    <section className="album-outer-wrapper">
      <div className="album-container">
        <div className="image-wrapper">
          <div className="overlay" />
          <div className="icon-wrapper">
            <img
              className="icon heart"
              src="../../icons/heart.svg"
              alt="heart-icon" />
            <img
              className="icon play"
              src="../../icons/play.svg"
              alt="play-icon" />
            <img
              className="icon dots"
              src="../../icons/dots.svg"
              alt="dots-icon" />
          </div>
          <img
            className="album-image"
            src={props.recordData.images[1].url}
            alt="album-cover" />
        </div>
        <p className="album-title">{props.recordData.name}</p>
        <h3 className="artist-name">
          <a href={props.recordData.artists[0].external_urls.spotify}>
            <ArtistName artists={props.recordData.artists} />
          </a>
        </h3>
      </div>
    </section>
  );
  /*   <div>
      <img src={props.data.images[2].url} />
      <p>{props.data.name}</p>
      <h3>{props.data.artists[0].name}</h3>
    </div>
  ) */
};

export default MusicCard;
