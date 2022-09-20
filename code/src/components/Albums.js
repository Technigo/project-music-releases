//daniels kod
import React from "react";
import Subheader from "./Artists";

const Header = (props) => {
  console.log(props.data);
  return (
    <>
      <h2>{props.data.name}</h2>
      <Subheader totalTracks={props.data.total_tracks} />
    </>
  );
};

export default Header;
