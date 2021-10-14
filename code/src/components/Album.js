import React from "react";
import Artist from "./Artist";
import CoverAlbum from "./CoverAlbum";
import SongTitle from "./SongTitle";
import { ReactComponent as MyDot } from "../assets/dots.svg";
import { ReactComponent as MyHeart } from "../assets/heart.svg";
import { ReactComponent as MyPlay } from "../assets/play.svg";

const Album = ({ image, title, titleLink, artist }) => {
  // console.log(artist.length)
  const numberOfArtists = artist.length;
  console.log(numberOfArtists);

  const artistCommaAmpersand = (artist, index) => {
    if (numberOfArtists === index + 1 && numberOfArtists !== 1) {
      // console.log('Ampersand success!')
      return <span> & {artist.name}</span>;
    } else if (numberOfArtists === index + 2 && index !== 0) {
      // console.log('Comma success!')
      return <span>, {artist.name}</span>;
    } else {
      // console.log('Single artist success!')
      return <span>{artist.name}</span>;
    }
  };

  return (
    <div className="album-wrapper">
      <div className="album">
        <div className="album-hover">
          <div className="album-hover-overlay">
            <MyHeart className="heart" />
            <MyPlay className="play" />
            <MyDot className="dot" />
          </div>
          <CoverAlbum image={image} />
        </div>
        <SongTitle titleLink={titleLink} title={title} />
        {/* <Artist artistLink={artistLink} artist={artist} /> */}

        {artist.map((artist, index) => {
          return (
            <Artist
              key={artist.id}
              artistLink={artist.external_urls.spotify}
              artist={artistCommaAmpersand(artist, index)}
            />
          );
        })}

        {/* {artist.map((ar, index) => {
            return <Artist 
            artistLink={ar.external_urls.spotify} artist={ar.name} />
            
          })} */}
      </div>
    </div>
  );
};

export default Album;
