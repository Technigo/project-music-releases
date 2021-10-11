import React from "react";

const Artist = (props) => {
  console.log(props);
  return (
    <article className="article">
      <img src={props.img} alt="spring view" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Date of publish: Monday 11th of October</p>
    </article>
  );
};

export default Artist;
