import React from "react";

import Artists from "./Artists";
import Release from "./Release";
import AlbumImage from "./AlbumImage";
import IconContainer from "./IconContainer";

const Card = (props) => {
  return (
    <div className="album-card">
      <div className="image-container">
        <AlbumImage image={props.image} />
        <IconContainer/>
      </div>
        <Release 
          release={props.release} 
          releaseUrl={props.releaseUrl}
        />
      <div className="artist-container"> {
        props.artist.map((props) => 
          <Artists 
          key={props.id} 
          artistName={props.name} 
          artistUrl={props.external_urls.spotify}
          /> 
        )};
      </div>
    </div>
  );
};

 export default Card;
