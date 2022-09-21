import React from "react";
import { SongTitle } from "./SongTitle";     

export const ArtistName = (props) => {      // this is the song name
    console.log(props.data)                 //checking the extraction in the console
    return (
        <>
        <h2>Song: {props.data.name}</h2>          
        <SongTitle Artist = {props.data.artists[0].name}/> 
        </>
       
    )
}