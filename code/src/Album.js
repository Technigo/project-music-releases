import React from 'react'

const Album = props =>{
    return(
        <article className ="album-container">
            <img src={props.albumImg} alt="Album cover"></img>
            <h2>{props.albumTitle}</h2>
            <p>{props.albumArtist}</p>
        </article>
    );

}
export default Album;