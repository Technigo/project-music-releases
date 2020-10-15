import React from "react";

export const Artist = (props) => {

  //determine if artist should have comma after or not
  if (props.length === 1)
    return <a href={props.url}><span className="artist-name">{props.name}</span></a>
  else {
    if (props.index < (props.length - 1))
      return <a href={props.url}><span className="artist-name">{props.name} , </span></a>
    else
      return <a href={props.url}><span className="artist-name">{props.name}</span></a>
  }

}
