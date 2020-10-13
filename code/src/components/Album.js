import React from "react";

export const Album = (props) => {  
  return (
    <div className="album-card">
        <div className="album-cover">
            <img src={props.imgsrc} alt="" className="album-cover-img"/>
        </div>

      <div>
        <h3>{props.name}</h3>
      </div>

      <div className="album-artists">
      {props.artists.map((artist) => {
        return <span key={artist.id}><a className="artists-link" href={artist.external_urls.spotify}>{artist.name}</a><span>,&nbsp;</span></span>
      })}
      </div>
    </div>
  );
};