import React from "react";
// import data from './data.json'


export const Album = props => {
return <div className="music-card"><img src = {props.image} alt="album cover"></img><div><p>{props.name}, {props.artist}</p></div></div>
    }