import React from "react";
import './Album.css';
import { Icons } from 'components/Icons'; 

export const Album = ({ image, albumname, artistname, albumurl, artisturl }) => {
    return (
        <article className="album-box">
            <a href={albumurl} target="_blank">
                <img className="album-img" src={image} alt="Album Cover" />
                <Icons />    
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

