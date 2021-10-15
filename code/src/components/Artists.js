import React from "react";

const Artists = (props) => {
  console.log(props)
  if(props.artists.length === 1) {
    return (<a href={props.artists[0].external_urls.spotify} key={props.artists[0].id} className="artists">{props.artists[0].name}</a>)
  }

  else {
    return ( <p key={props.artists[0].id}>
        {props.artists.splice(0, props.artists.length - 2).map((artist) => (
          <a href={artist.external_urls.spotify} className="artists">{artist.name}, </a>
        ))}
        <a href={props.artists[0].external_urls.spotify} className="artists">{props.artists[0].name}</a>
        <span class="artist-and"> & </span>
        <a href={props.artists[1].external_urls.spotify} className="artists">{props.artists[1].name}</a>
      </p>)
  }
}

export default Artists