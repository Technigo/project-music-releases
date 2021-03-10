import React from "react";

const Album = (props) => {


  return (
    <div className="album">
      <a href={props.albumContent.external_urls.spotify}>
        <img className="cover" src={props.albumContent.images[1].url} alt="cover" />
        <h3>{props.albumContent.name}</h3>
      </a>
      <div>{props.albumContent.artists.map((name) => {
        return <a href={name.external_urls.spotify}><div key={name.name}>{name.name}</div></a>
        })}</div>
    </div>
  )
  
 
}

export default Album;