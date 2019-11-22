import React from "react";
import { Icons } from "./Icons";

export const Albums = props => {
  return (
    <div className="AlbumContainer">
      <div className="ArtistContainer">
        <div>
          <img className="AlbumImage" src={props.image} alt="albumImage"></img>
          <div className="iconsContainer">
            <Icons />
          </div>
          <div className="ArtistContent">
            <a href={props.albumURL}>
              <p className="AlbumName">{props.name}</p>
            </a>
            <a href={props.artistURL}>
              <p className="ArtistName">{props.artist}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/*

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
                  <a href={item.external_urls.spotify}>
                    <p className="ArtistName">{item.artists[0].name}</p>
                  </a>
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


*/
