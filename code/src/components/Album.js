import React from "react";

export const Album = (props) => {
  return (
    <div>
      <img src={props.img} alt="Album cover" className="album-cover" />
      <p className="albums"> {props.name}</p>
    </div>
  );
};
