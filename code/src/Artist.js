import React from "react";

export const Artist = (props) => {

  //determine if artist should have comma after or not
  if (props.length === 1)
    return <a href={props.url} target="_blank" rel="noopener noreferrer"><span className="artist-name">{props.name}</span></a>
  else if (props.length === 2)
    return <a href={props.url} target="_blank" rel="noopener noreferrer"><span className="artist-name">{props.name}
      {props.index === 0 ? " & " : null}</span></a>
  else {
    if (props.index < (props.length - 2))
      return <a href={props.url} target="_blank" rel="noopener noreferrer"><span className="artist-name">{props.name}, </span></a>
    else if (props.index === (props.length - 2))
      return <a href={props.url} target="_blank" rel="noopener noreferrer"><span className="artist-name">{props.name} &#38; </span></a>
    else
      return <a href={props.url} target="_blank" rel="noopener noreferrer"><span className="artist-name">{props.name}</span></a>
  }
}
