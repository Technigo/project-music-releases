import React from "react";

const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return " & ";
  } else if (index < length - 2) {
    return ", ";
  }
  return;
};


const Artists = ({ artistList}) => {
  return (
    <div className="artistWrapper">
      {artistList.map((artist, index) => {
          // console.log(artist)
            console.log('artistList.length', artistList.length)
            console.log('index', index)

        return (
          <div className="artistName" key={artist.uri}>
            <a href={artist.external_urls.spotify}>            
            <span>
            {artist.name}
            {generateDelimiter(index, artistList.length)}
            
  </span>
            </a>
          </div>

        );
      })}
    </div>
  );
};

export default Artists;

 /* <span>{artist.length-1> index?',': ''}</span> */