import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img
            src={props.imgSrc}
            alt="Picture of site about information Did you sleep well?"
          />
        </div>
        <div className="icon__container">
          <img
            className="heart-icon"
            src="/icons/heart.svg"
            alt="heart button"
          />
          <img
            className="play-button"
            src="/icons/play.svg"
            alt="play button"
          />
          <img className="dots-icon" src="/icons/dots.svg" alt="dots-button" />
        </div>
        <a href="">
          <h1 className="card__title">{props.title}</h1>
        </a>
        <a href="">
          <p className="card__info">{props.info}</p>
        </a>
      </div>
    </>
  );
};

export default Card;
