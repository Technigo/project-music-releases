import React from "react";

//Function generating , or & depending on how many names there is in the array
const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return " & ";
  } else if (index < length - 2) {
    return ", ";
  }
  return;
};


const Artists = ({artistList}) => {
  return (
    <div className="artistWrapper">
      {artistList.map((artist, index) => {  
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