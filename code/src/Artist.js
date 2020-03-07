import React from "react";
import data from "./data.json";

console.log(data);
export const Artist = () => {
  return (
    <div className="Artist">
      {data.albums.items.map(item => {
        return <div key={item.id}>{item.artists[0].name}</div>;
      })}
    </div>
  );
};
export default Artist;
