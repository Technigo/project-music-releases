// import React from "react";

const separator = (index, length) => {
  if (index === length - 2) {
    return ' & ';
  } else if (index < length - 2) {
    return ', ';
  }
  return;
};

const ArtistName = (props) => {
  // const artistArray = props; //.data.artists;
  console.log(props);
  // return <p> {props.artists[0].name}</p>;
  if (props.artists.length > 1) {
    const allArtists = props.artists.map((artist, index) => {
      console.log(`artistname:${artist.name}`);
      return `${artist.name} ${separator(index, allArtists.length)}`;
    });
    return allArtists;
  } else {
    return props.artists[0].name;
  }
};

export default ArtistName;