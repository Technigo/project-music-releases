import React from "react";

const Cover = (props) => {
  return (
    <div className="cover">
      <img
        className="cover-img"
        src={props.item.images[0].url}
        alt="Album cover"
      ></img>

      <div className="icons">
        <img className="#" src=".#" alt=""></img>
        <img className="#" src="#" alt=""></img>
        <img className="#" src="#" alt=""></img>
      </div>
    </div>
  );
};

export default Cover;
