//daniels kod
import React from "react";
import ArtistName from "./ArtistName";

const MusicCard = (props) => {
  console.log(props.recordData.artists);
  //console.log(`bildadress ${props.data.images[1].url}`);

  return (
    <section className="album-outer-wrapper">
      <div className="album-container">
        <img className="album-image" src={props.recordData.images[1].url} />
        <p className="album-title">{props.recordData.name}</p>
        <h3 className="artist-name">
          <ArtistName artists={props.recordData.artists} />
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
