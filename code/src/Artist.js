import React from "react";

export const Artist = (props) => {
  if (props.length == 1)
    return <a href={props.url}><span className="artist-name">{props.name}</span></a>
  else {
    if (props.index < (props.length - 1))
      return <a href={props.url}><span className="artist-name">{props.name} , </span></a>
    else
      return <a href={props.url}><span className="artist-name">{props.name}</span></a>
  }
}