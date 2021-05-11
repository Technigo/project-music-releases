import React from "react";

const Album = (props) => {


  return (
    <div className="album">
      <a href={props.albumContent.external_urls.spotify}>
        <div className="cover-wrapper">
          <img className="cover" src={props.albumContent.images[1].url} alt="cover" />
          <div className="icons">
            <img className="icon favorite" src={require("./heart.svg")} alt="favorite icon" />
            <img className="icon play" src={require("./play.svg")} alt="play icon" />
            <img className="icon dots" src={require("./dots.svg")} alt="dots icon" />
          </div>
        </div>
        <h3 className="underline">{props.albumContent.name}</h3>
      </a>
      <div>{props.albumContent.artists.map((name) => {
        return <a className="artist-container" key={name.name} href={name.external_urls.spotify}><span className="artist-name underline">{name.name}</span></a>
        })}</div>
    </div>
  )
  
 
}

export default Album;