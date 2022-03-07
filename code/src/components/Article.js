import React from "react";

//v1 Named export
export const Article = (props) => {
  console.log(props);
  return (
    <article className="article">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>7th of March, 2022</p>
      <img src="https://www.fillmurray.com/150/200" alt="fill murray" />
      <div className="tag-container">
        <span className="tag">Programming</span>
        <span className="tag">React</span>
      </div>
    </article>
  );
};
