import React from 'react';
import { Artist } from './Artist'; //importing Artist.js component
import { Album } from './Album'; //importing Album.js component

//receiving props from the App.js
export const Article = (props) => {
  return (
    <article className="article" id={props.key}>
      <div className="image-container">
        <div className="overlay">
          <img src="./icons/heart.svg" alt="a heart icon" />
          <img className="play-icon" src="./icons/play.svg" alt="a play icon" />
          <img src="./icons/dots.svg" alt="a dot icon" />
        </div>
        <img
          className="album-cover"
          alt={props.albumCover}
          src={props.albumCover}
        />
      </div>
      <div>
        {/* Mounting the album container */}
        <Album
          className="album-name"
          albumTitle={props.albumName}
          albumUrl={props.albumLink}
        />
      </div>
      <div>
        {/* Mounting it and getting each artists from the artist array in data.jason */}
        {props.bandName.map((item, index) => {
          return (
            <Artist
              className="album-artist"
              artistName={item.name} // sending the artist name
              artistUrl={item.external_urls.spotify} //sending the artist url
              index={index} //sending the index of the artist in the array
              totalArtist={props.bandName.length} //sending the total number artist (the length of the array)
            />
          );
        })}
      </div>
    </article>
  );
};

//This component calls two components (Artist.js and Album.js).
