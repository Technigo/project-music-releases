import React from "react";
import Subheader from "./Subheader";

const Header = (props) => {
  console.log(props.data);
  return (
    <>
      <div>
        <h2>{props.data.name}</h2>
        <Subheader totalTracks={props.data.total_tracks} />
        <h4>{props.data.release_date}</h4>
      </div>
    </>
  );
};

export default Header;
