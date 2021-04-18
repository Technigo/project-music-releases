import React from "react";

import Card from "./Card";

const CardContainer = (props) => {
  return ( 
    <div className = "card-container" > {
      props.data.map((props) => 
        <Card 
          key = {props.external_urls.spotify} 
          image = {props.images[1]} 
          release = {props.name} 
          releaseUrl = {props.external_urls.spotify} 
          artist = {props.artists} 
          artistUrl = {props.artists[0].external_urls}
        />    
      )};
    </div>  
  );
};

export default CardContainer;
