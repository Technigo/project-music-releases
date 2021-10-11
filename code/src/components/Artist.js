import React from "react";

const Artist = (props) => {
  console.log(props);
  return (
    <div key={props.id}>
      <h2>{props.name}</h2>
      <a href={props.external_urls}>link</a>
    </div>
  );
};

export default Artist;
