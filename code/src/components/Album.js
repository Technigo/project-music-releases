import React from "react";

export const Album = ({ image, albumname, artistname, albumurl, artisturl }) => {
    return (
        <article className="album-box">
            <a href={albumurl}>
                <img className="album-img" src={image} alt="Album Cover" />    
            </a>
            <a href={albumurl}>
                <div className="albumname">{albumname}</div>
            </a>
            <a href={artisturl}>
                <div className="artistname">{artistname}</div>
            </a>
        </article>
    )
}

// New window opens for when link is clicked
// The name of each artist involved with a comma between
// Include icons here?