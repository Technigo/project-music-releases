import React from "react";
import data from "../data.json";

export const Album = (props) => {
  const albumImage = data.albums.items.map((item) => item.images);
  console.log(data);
  console.log(albumImage[1]);
  return (
    <img className="album-cover" src={albumImage[1].url} alt="album cover" />
  );
};
