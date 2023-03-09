import React from "react";

export const Album = ({ image, albumname, artistname, albumurl, artisturl }) => {
    return (
        <article className="album-box">
            <a href={albumurl} target="_blank">
                <img className="album-img" src={image} alt="Album Cover" />    
            </a>
            <a href={albumurl} target="_blank">
                <div className="albumname">{albumname}</div>
            </a>
            <a href={artisturl} target="_blank">
                <div className="artistname">{artistname}</div>
            </a>
        </article>
    )
}

// The name of each artist involved with a comma between
// Create an Artist component?