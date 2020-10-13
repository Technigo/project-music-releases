import React from "react";

export const Card = (props) => {
 return (
  <>
  <img src={props.image} alt="album display"></img> 
   <div className="albumsname">{props.name}</div>
   <div>{props.artistname}</div>
 </>
 )
};