import React from "react";

const ArtistName = (props) => {
  //const artistArray = props; //.data.artists;
  console.log(props);
  // return <p> {props.artists[0].name}</p>;
  if (props.artists.length > 1) {
    props.artists.map((artist) => {
      console.log(`artistname:${artist.name}`);
      return artist.name;
    });
  } else {
    return props.artists[0].name;
  }
};

export default ArtistName;
