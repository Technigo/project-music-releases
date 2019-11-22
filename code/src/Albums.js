import React from "react";
import data from "./data.json";
import { Icons } from "./Icons";

export const Albums = () => {
  return (
    <div className="Album">
      {data.albums.items.map(item => {
        return (
          <div className="AlbumContainer">
            <div className="ArtistContainer">
              <div key={item.id}>
                {" "}
                <img
                  className="AlbumImage"
                  src={item.images[1].url}
                  alt="Album cover"
                ></img>
                <div className="iconsContainer">
                  <Icons />
                </div>
                <div className="ArtistContent" key={item.artist}>
                  <p className="AlbumName">{item.name}</p>
                  <p className="ArtistName">{item.artists[0].name}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

/*



export const Albums = props => (
  <div className="AlbumContainer">
    <div className="ArtistContainer">
      <div>
        <img
          className="AlbumImage"
          src={props.images[1].url}
          alt="albumImage"
        ></img>

        <div className="ArtistContent">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  </div>
);
*/
