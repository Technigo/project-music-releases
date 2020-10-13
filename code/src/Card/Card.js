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
        <h1 className="card__title">{props.title}</h1>
        <p className="card__info">{props.info}</p>
      </div>
    </>
  );
};

export default Card;
