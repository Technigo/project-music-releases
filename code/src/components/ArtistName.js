import React from "react";
import { SongTitle } from "./SongTitle";     
import { AlbumCover } from "./AlbumCover";

export const ArtistName = (props) => {      // this is the song name
    console.log(props.data)                 //checking the extraction in the console
    return (
        <>
        <div className="Box">
        <h2 className="Song">Song: {props.data.name}</h2>          
        <SongTitle Artist = {props.data.artists[0].name}/> 
        <AlbumCover images = {props.AlbumCover}/>
        </div>
        
        </>
       
    )
}