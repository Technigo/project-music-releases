import React from "react";

const CardOptions = () => {
  return (
    <div className="card-options">
      <img
        className="card-options__like"
        src="/icons/heart.svg"
        alt="heart button"
      />
      <img
        className="card-options__play"
        src="/icons/play.svg"
        alt="play button"
      />
      <img
        className="card-options__more"
        src="/icons/dots.svg"
        alt="dots-button"
      />
    </div>
  );
};
export default CardOptions;
