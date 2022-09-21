//daniels kod
import React from "react";
import ArtistName from "./ArtistName";

const MusicCard = (props) => {
  console.log(props.recordData.artists);
  //console.log(`bildadress ${props.data.images[1].url}`);

  return (
    <div>
      <img src={props.recordData.images[2].url} />
      <p>Titel:{props.recordData.name}</p>
      <h3>
        Artist:
        <ArtistName artists={props.recordData.artists} />
      </h3>
    </div>
  );
  /*   <div>
      <img src={props.data.images[2].url} />
      <p>{props.data.name}</p>
      <h3>{props.data.artists[0].name}</h3>
    </div>
  ) */
};

export default MusicCard;
