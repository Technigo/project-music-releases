import React from "react";

const Artist = (props) => {
  console.log(props);
  return (
    <a href={props.artistLink} target="_blank">
      <p>{props.artistName}</p>
    </a>
  );
};

export default Artist;
