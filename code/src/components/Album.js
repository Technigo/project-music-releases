import React from "react";
import Artist from "./Artist";
import CoverAlbum from "./CoverAlbum";
import SongTitle from "./SongTitle";

const Album = ({ image, title, titleLink, artist }) => {
  // console.log(artist.length)
  const numberOfArtists = artist.length
  console.log(numberOfArtists)
  
  const artistCommaAmpersand = (artist, index) => {
    if (numberOfArtists === index + 1 && numberOfArtists !== 1) {
      // console.log('Ampersand success!')
        return <span> & {artist.name}</span>
      } else if (numberOfArtists === index + 2 && index !== 0) {
        // console.log('Comma success!')
        return <span>, {artist.name}</span>
      } else {
        // console.log('Single artist success!')
        return <span>{artist.name}</span>
      }
  }

  return (
    <div className="album-wrapper">
      <div className="album">
        <CoverAlbum image={image} />
        <SongTitle titleLink={titleLink} title={title} />
        {/* <Artist artistLink={artistLink} artist={artist} /> */}

        {artist.map((artist, index) => {
            return <Artist 
            artistLink={artist.external_urls.spotify}
            artist={artistCommaAmpersand(artist, index)} />
            
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
