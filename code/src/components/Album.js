import React from "react";
import { ReactComponent as LogoOne } from "icons/heart.svg";
import { ReactComponent as LogoTwo } from "icons/play.svg";
import { ReactComponent as LogoThree } from "icons/dots.svg";

const Album = (album) => {
  return (
    <div className="albums">
      <div className="img-container">
        <div className="overlay">
          <div className="logo-heart">
            {" "}
            <LogoOne />
          </div>
          <div className="logo-play">
            {" "}
            <LogoTwo />
          </div>
          <div className="logo-dot">
            {" "}
            <LogoThree />
          </div>
        </div>
        <img className="image" src={album.cover} alt="album cover" />
      </div>

      <div className="album-textcontainer">
        <a
          className="album-title"
          href={album.albumurl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="album-title"> {album.name} </h2>
        </a>
        <div className="artist-text-container">
          {album.artists.map((artist) => {
            return (
              <div key={artist.id} className="inner-artist-container">
                <a
                  className="artist-name"
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Album;
