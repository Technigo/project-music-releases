import React from "react";
import Artist from "./Artist";
// import Artist from "./Artist";

const Album = (props) => {
  console.log(props);

  return (
    <div className="album-wrapper">
      <div key={props.id} className="album">
        <img src={props.img} alt="#" />
        <h2>{props.name}</h2>
        <Artist name={props.name} external_urls={props.external_urls} />
      </div>
    </div>
  );
};

export default Album;

/* <p>{props.artists}</p> */
