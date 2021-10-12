import React from "react";

const Artist = (props) => {
  return (
    <div className="artist">
      <h2>{props.item.artists[0].name}</h2>
    </div>
    //Fler artister med komma emellan genom en foreach
  );
};

export default Artist;
