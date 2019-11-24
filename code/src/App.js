import React from "react";
import { Album } from "./Album";
import data from "./data.json";
import "./css/app.css";

export const App = () => {
  return (
    <React.Fragment>
      <h1>New albums & singles</h1>
      <div className="albums">
        {data.albums.items.map(album => {
          return (
            <Album
              key={album.id}
              name={album.name}
              artists={album.artists}
              images={album.images}
              url={album.uri}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};
