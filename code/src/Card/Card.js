import React from "react";

const Card = (props) => {
  return (
    <>
      <div class="card__img">
        <img
          src={props.imgSrc}
          alt="Picture of site about information Did you sleep well?"
        />
      </div>
      <h1 class="card__title">{props.title}</h1>
      <p class="card__info">{props.info}</p>
    </>
  );
};

export default Card;
