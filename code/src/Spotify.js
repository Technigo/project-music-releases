import React from "react";
// import data from './data.json'     <a href={item.external_urls.spotify}><p>{item.name}</p></a>)


export const Album = props => {
    const myList=props.artist
    const newList = myList.map((element) => {
    // <a href={element.link}><p>{element.name}</p></a>
    });
    const word = newList.toString().replace(",", ", ")

return <div className="music-card"><div><img src = {props.image} alt="album cover"></img><img className="icon" src="./icons/play.svg"></img></div>
<div><a href= {props.linkAlbum}><p>{props.name}</p></a>{word}</div></div>
    }