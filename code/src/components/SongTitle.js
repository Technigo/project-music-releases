import React from "react";

export const SongTitle = (props) => {       //ARTIST NAME , NAMES ARE OTHER WAY AROUND
    console.log(props.data)                 //checking the extraction in the console

    return (
        <>
        <h3 className="Artist">ARTIST : {props.Artist}</h3>          
        </>
       
    )
}
