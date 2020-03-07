import React from "react";
import data from "./data.json";
//console.log(data);
export const MusicLink = () => {
  return (
    <div className="MusicLink">
      {data.albums.items.map(item => {
        return (
          // <a key={item.id} href={item.external_urls.spotify}>
          //   {item.name}
          // </a>
          <div
            style={{ backgroundImage: `url(${item.images[2].url})` }}
            className="album-cover"
          ></div>
        );
      })}
    </div>
  );
};
export default MusicLink;
