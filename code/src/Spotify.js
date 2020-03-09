import React from "react";
// import data from './data.json'     <a href={item.external_urls.spotify}><p>{item.name}</p></a>)


export const Album = props => {

return <div className="music-card">
<div className="images"><img className = "album-image" src = {props.image} alt="album cover"></img>
<img className="icon" src="./icons/play1.svg" alt="playicon"></img></div>
<div className="paragraph"><a href= {props.linkAlbum}><p>{props.name}</p></a>
<div className="artists"><a href= {props.link1}><p>{props.artist1}</p></a>
<a href= {props.link2}><p>{props.artist2}</p></a>
<a href= {props.link3}><p>{props.artist3}</p></a></div></div></div>
    }
