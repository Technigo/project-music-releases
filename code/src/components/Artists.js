import React from "react";

const Artists = (props) => {
  return (
    <div>
      <h3 className="song-artists">        
        {props.artistArray.map((artist) =>
        <a 
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        >
        <span>{artist.name}</span></a>)}
      </h3>
    </div>
)}
export default Artists;
